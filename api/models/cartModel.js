import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      products: [
        {
          productId: String,
          quantity: Number,
          name: String,
          price: Number
        }
      ],
      active: {
        type: Boolean,
        default: true
      },
      modifiedOn: {
        type: Date,
        default: Date.now
      }
    },
    { timestamps: true }
)

export const  Cart= mongoose.model("Cart", cartSchema)