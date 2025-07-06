import mongoose from "mongoose";
import { contactSchema } from "./contact.models";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Female", "Male"],
      required: true,
    },
    contactinfo: {
      type: contactSchema,
      required: true,
    },
    medicalHistory: {
      type: [String],
      default: [],
    },
    currentmedication: {
      type: [String],
      type: [],
    },
    appointments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointment",
    },
  },
  { timestamps: true }
);

export const patient = mongoose.model("patient", patientSchema);
