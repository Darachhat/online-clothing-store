import express from 'express';
import { placeOrder, abaOrder, bakongOrder, allOrders, userOrders, updateStatus, verifyAba, verifyBakong } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/aba',authUser, abaOrder);
orderRouter.post('/bakong', authUser, bakongOrder);

// User Feature
orderRouter.post('/userorders', authUser, userOrders);

// Verify payment
orderRouter.post('/verifyAba', authUser, verifyAba)
orderRouter.post('/verifyBakong', authUser, verifyBakong)

export default orderRouter;
