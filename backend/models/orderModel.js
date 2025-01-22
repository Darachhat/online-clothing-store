import mongoose from "mongoose";

// Sub-schema for items
const itemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  size: { type: String },
  image: { type: Array, required: true }, // Optional size field
});

// Main schema for orders
const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
    items: { type: [itemSchema], required: true }, // Array of item sub-schema
    amount: { type: Number, required: true }, // Total order amount
    address: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: false },
      zipcode: { type: String, required: true },
      country: { type: String, required: true },
    }, // Nested address fields
    status: {
      type: String,
      enum: ["Order Placed", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Order Placed",
      required: true,
    }, // Predefined statuses
    paymentMethod: { type: String, required: true }, // E.g., "Credit Card", "ABA PayWay"
    isPaid: { type: Boolean, default: false }, // Renamed for clarity
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);


const orderModel = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default orderModel;
