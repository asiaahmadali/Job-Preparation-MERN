import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.model(
  {
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    order: {},
  },
  { timestamps: true }
);

export const order = mongoose.model("order", orderSchema);
