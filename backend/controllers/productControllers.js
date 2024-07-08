const productModel = require('../models/productModels');

// Get Products api - /api/v1/products
exports.getProducts = async(req, res, next) => {
    // productModel.find({name:'Something'}); particular field
    const products = await productModel.find({}); //to find in all
    
    res.json({
        success: true,
        // Message: 'Get product working'
        products
    })
}

// Get Single Products api - /api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
    try{
        console.log(req.params.id, 'ID')
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            // Message: 'Get single product working'
            product
        })
    }
    catch(error){
        res.status(404).json({
            success: false,
            Message: 'Get single product is not working '+error.Message
        })
    }
    
}