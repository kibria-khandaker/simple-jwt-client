import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orders`
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken3')}`
            }
        })
            // .then(res => res.json())
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                }
                console.log(res);
                return res.json()
            })
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [])
    return (
        <div className='k-text-center'>
            <h2> Orders </h2>

        <p> {orders.length} </p>


        </div>
    );
};

export default Orders;