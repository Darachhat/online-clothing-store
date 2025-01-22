import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import crypto from "crypto";
import bodyParser from 'body-parser'

const ABA_PAYWAY_API_URL = 'https://checkout-sandbox.payway.com.kh/api/payment-gateway/v1/payments/purchase';
const ABA_PAYWAY_API_KEY = '8ba03c8671be74e5f9c0ef2966140df2a3db73ba';
const ABA_PAYWAY_MERCHANT_ID = 'ec438769';

// Global Variables
const currency = 'usd';
const deliveryCharge = 10;

function getHash(str) {
  const hmac = crypto.createHmac('sha512', ABA_PAYWAY_API_KEY);
  hmac.update(str);
  return hmac.digest('base64');
}


// Placing orders using COD (Cash on Delivery)
export const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Validate input
    if (!userId || !items || !amount || !address) {
      return res.status(400).json({ success: false, message: 'Invalid request payload' });
    }
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Clear user's cart data
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.status(201).json({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const abaOrder = async (req, res) => {
  try {
    // Destructure request body
    const { userId, items, amount, address, paymentMethod } = req.body;

    // Input validation
    if (!userId || !items || !amount || !address || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields. Ensure userId, items, amount, address, and paymentMethod are provided.",
      });
    }

    // Validate items array
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Items array is required and should contain at least one item.",
      });
    }

    // Format items for ABA PayWay
    const formattedItems = items.map(({ name, quantity, price }) => ({
      name,
      quantity,
      price,
    }));

    const itemsBase64 = Buffer.from(JSON.stringify(formattedItems)).toString("base64");

    // ABA PayWay details
    const req_time = Math.floor(Date.now() / 1000); // Current timestamp in seconds
    const transactionId = `${req_time}`; // Unique transaction ID (can include userId for tracking)
    const { firstName, lastName, phone, email, street, city, country } = address;

    const return_params = "Transaction Completed";
    const type = "purchase";
    const currency = "USD";
    const payment_option = "";
    const shipping = (items.length * 0.2).toFixed(2); // Example: calculate based on the number of items

    // Generate hash for ABA PayWay
    const hashInput = `${req_time}${ABA_PAYWAY_MERCHANT_ID}${transactionId}${amount}${itemsBase64}${shipping}${firstName}${lastName}${email}${phone}${type}${payment_option}${currency}${return_params}`;
    const hash = getHash(hashInput);

    // Store order in the database (optional)
    const order = new orderModel({
      userId,
      items,
      amount,
      address,
      paymentMethod:'aba',
      status: "Order Placed",
      isPaid: false,
    });

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    await order.save();

    console.log("Order created:", order);

    // Generate HTML form for ABA PayWay payment
    res.send(`
      <form method="POST" action="${ABA_PAYWAY_API_URL}" id="aba_merchant_request">
        <input type="hidden" name="hash" value="${hash}" />
        <input type="hidden" name="tran_id" value="${transactionId}" />
        <input type="hidden" name="amount" value="${amount}" />
        <input type="hidden" name="firstname" value="${firstName}" />
        <input type="hidden" name="lastname" value="${lastName}" />
        <input type="hidden" name="phone" value="${phone}" />
        <input type="hidden" name="email" value="${email}" />
        <input type="hidden" name="items" value="${itemsBase64}" />
        <input type="hidden" name="return_param" value="${return_params}" />
        <input type="hidden" name="shipping" value="${shipping}" />
        <input type="hidden" name="currency" value="${currency}" />
        <input type="hidden" name="type" value="${type}" />
        <input type="hidden" name="merchant_id" value="${ABA_PAYWAY_MERCHANT_ID}" />
        <input type="hidden" name="req_time" value="${req_time}" />
        <input type="hidden" name="return_params" value="${return_params}" />
        <input type="hidden" name="payment_option" value="${payment_option}" />
      </form>
      <script>
        document.getElementById('aba_merchant_request').submit();
      </script>
    `);
  } catch (error) {
    console.error("Error initiating payment:", error);

    res.status(500).json({
      success: false,
      message: "An error occurred during payment initiation.",
    });
  }
}
// Verify Aba
export const verifyAba = async (req, res) => {
  
  const {orderId, success, userId }= req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {payment:true});
      await userModel.findByIdAndUpdate(userId, {cartData: {}})
      res.json({success: true});
    } else {
      await orderModel.findByIdAndDelete(orderId)
      res.json({success: false});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message:error.message });
  }
}

// Fetch all orders for admin panel
export const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Fetch user-specific orders
export const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Update order status from admin panel
export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({ success: false, message: 'Order ID and status are required' });
    }

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
