const express = require('express');
const { createOrder } = require('../controllers/orderControllers');
const router = express.Router();

router.route('/orders').post(createOrder)

module.exports=router;