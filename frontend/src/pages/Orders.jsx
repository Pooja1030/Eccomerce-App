/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  const loadOrderData = async () => {
    try {
      // Return early if no token
      if (!token) {
        setError('No token provided');
        setLoading(false);
        return;
      }

      // Make API request
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('Full Response:', response); // Check full response
      console.log('Response Data:', response.data); // Check response.data

      // If response is successful and contains the expected data structure
      if (response.data && response.data.orders && response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            const updatedItem = {
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            };
            allOrdersItem.push(updatedItem);
          });
        });
        setOrderData(allOrdersItem.reverse());
        setError(null); // Clear any previous error
      } else {
        // Handle case where success is false or data is in an unexpected format
        setError('Unexpected response structure.');
      }
    } catch (error) {
      // Catch and handle errors
      console.error('Error:', error);
      setError('Failed to load orders. Please try again later.');
    } finally {
      setLoading(false); // Always stop loading after request
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  if (loading) {
    return <p>Loading orders...</p>; // Show loading indicator
  }

  if (error) {
    return <p>{error}</p>; // Show error message
  }

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      {orderData.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orderData.map((item, index) => (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>
                    Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className='mt-1'>
                    Payment: <span className='text-gray-400'>{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
