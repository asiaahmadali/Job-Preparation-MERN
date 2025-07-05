import mongoose from "mongoose";

const wardSchema = new mongoose.Schema(
  {
    roomNo: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["ICU", "General", "Private"],
      required: true,
    },
    occupied: {
      type: Boolean,
      required: true,
    },
    currentPatient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
    },
  },
  { timestamps: true }
);

export const ward = mongoose.model("ward", wardSchema);
