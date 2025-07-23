import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true // createdAt and updatedAt
});


// 2desc mongoose automatically converts to plural
export const Product = mongoose.model('Product', productSchema);