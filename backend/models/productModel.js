import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Men', 'Women', 'Kids'],
    },
    subCategory: {
        type: String,
        required: true,
        enum: ['Topwear', 'Bottomwear', 'Winterwear'],
    },
    bestseller: {
        type: Boolean,
        default: false,
    },
    sizes: {
        type: [String],
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
