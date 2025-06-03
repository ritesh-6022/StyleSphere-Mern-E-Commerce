/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const Verify = () => {
    const navigate = useNavigate();
    const { token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) return;

            const response = await axios.post(
                `${backendUrl}/api/order/verifyStripe`,
                { success, orderId },
                { headers: { token } }
            );

            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                navigate('/cart');
            }

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || 'Payment verification failed');
            navigate('/cart');
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [token]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Verifying your payment, please wait...</h2>
        </div>
    );
};

export default Verify;
