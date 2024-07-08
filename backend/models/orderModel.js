const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: {
        type:Number,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    createdDate: {
        type:Date,
        default:Date.now()
    }
})

const orderModel = mongoose.model('order',orderSchema);
module.exports=orderModel;