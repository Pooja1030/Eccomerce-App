/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Add = ({ token }) => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Men');
    const [subcategory, setSubcategory] = useState('Topwear');
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const backendUrl = 'http://localhost:5000'; // Replace with your actual backend URL

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('subCategory', subcategory);
            formData.append('bestseller', bestseller);
            formData.append('sizes', JSON.stringify(sizes));

            image1 && formData.append('image1', image1);
            image2 && formData.append('image2', image2);
            image3 && formData.append('image3', image3);
            image4 && formData.append('image4', image4);

            console.log('Using token:', token);


            const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setImage1(null);
                setImage2(null);
                setImage3(null);
                setImage4(null);
                setPrice('');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error while adding product:', error); // Log the error
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>
                <div className='flex gap-20'>
                    {[image1, image2, image3, image4].map((img, index) => (
                        <label key={index} htmlFor={`image${index + 1}`}>
                            <img
                                className='w-20'
                                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                                alt=''
                            />
                            <input
                                onChange={(e) => {
                                    if (index === 0) setImage1(e.target.files[0]);
                                    if (index === 1) setImage2(e.target.files[0]);
                                    if (index === 2) setImage3(e.target.files[0]);
                                    if (index === 3) setImage4(e.target.files[0]);
                                }}
                                type='file'
                                id={`image${index + 1}`}
                                hidden
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='w-full max-w-[500px] px-3 py-2'
                    type='text'
                    placeholder='Type here'
                    required
                />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product description</p>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='w-full max-w-[500px] px-3 py-2'
                    placeholder='Write content here'
                    required
                />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Sub Category</p>
                    <select onChange={(e) => setSubcategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Winterwear">Winterwear</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        className='w-full px-3 py-2 sm:w-[120px]'
                        type='number'
                        placeholder='25'
                        required
                    />
                </div>
            </div>

            <div>
                <p className='mb-2'>Product Sizes</p>
                <div className='flex gap-3'>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                            <p className={`${sizes.includes(size) ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>
                                {size}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
                <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
            </div>

            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
    );
};

Add.propTypes = {
    token: PropTypes.string.isRequired,
};

export default Add;
