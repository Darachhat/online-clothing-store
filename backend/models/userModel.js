import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, reqired: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, reqired: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false, timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
