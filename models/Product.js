// models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxlength: [200, "Description cannot be more than 200 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);