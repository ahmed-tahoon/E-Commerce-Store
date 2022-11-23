const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const { Schema } = Mongoose;


const CartItemSchema = new Schema({

  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number,
  purchasePrice: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number,
    default: 0
  },
  priceWithTax: {
    type: Number,
    default: 0
  },
  totalTax: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'Not processed',
    enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
  }
});
module.exports = Mongoose.model('CartItem', CartItemSchema);

const CartSchema = new Schema({
   
    products:[CartItemSchema],
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{timestamps: true }
)
module.exports = Mongoose.model('Cart', CartSchema);
