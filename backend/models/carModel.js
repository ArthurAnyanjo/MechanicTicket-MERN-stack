import mongoose from "mongoose";

const carSchema = mongoose.Schema(
  {
    carBrand: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    numberPlate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    fixed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Car = mongoose.model("Car", carSchema);
