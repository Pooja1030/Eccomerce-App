import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// Function for adding a product
const addProduct = async (req, res) => {
    try {
        console.log(req.body); 
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const images = await Promise.all(
            [req.files.image1, req.files.image2, req.files.image3, req.files.image4].map(async (imageFile) => {
                if (imageFile) {
                    const result = await cloudinary.uploader.upload(imageFile[0].path, { resource_type: 'image' });
                    return result.secure_url;
                }
                return null;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            image: images.filter(Boolean),
            date: Date.now(),
        };

        try {
            const product = new productModel(productData);
            await product.save();
            await product.save();
            res.json({ success: true, message: "Product Added" });
        } catch (error) {
            console.log('Error saving product:', error);  // Log this error
            res.json({ success: false, message: 'Failed to save product: ' + error.message });
        }
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function for listing products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function for removing product info
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listProducts, addProduct, removeProduct, singleProduct };
