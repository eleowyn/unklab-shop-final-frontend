import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import { database } from '../firebase-config';
import StoreItem from './StoreItem';
import { UserProvider } from '../Context/CartContext';
import AllStoreItems from './AllStoreItems';

const OffersHome = ({ id, price, name, imgUrl, discription, seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [storeItems, setStoreItems] = useState([]);
    const [allItems, setAllItems] = useState([]);

    // Timer formatting function
    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }

    // Timer effect
    useEffect(() => {
        if (timeLeft > 0) {
            const timeoutId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [timeLeft]);

    // Firebase data fetching
    useEffect(() => {
        // Reference to your offers data
        const offersRef = ref(database, 'offers');
        // Reference to your all products data
        const productsRef = ref(database, 'products');

        // Listen for offers data changes
        const unsubscribeOffers = onValue(offersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const itemsArray = Object.values(data);
                setStoreItems(itemsArray);
            }
        });

        // Listen for all products data changes
        const unsubscribeProducts = onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const itemsArray = Object.values(data);
                setAllItems(itemsArray);
            }
        });

        // Cleanup function
        return () => {
            unsubscribeOffers();
            unsubscribeProducts();
        };
    }, []);

    return (
        <UserProvider>
            <div className='grid mt-[100px] mb-[100px] justify-center '>
                <div className='flex mb-5 justify-between'>
                    <h1 className='text-[25px] font-bold text-[#3772ad]'>Offers</h1>
                    <p className='text-[25px] font-bold text-[#3772ad]'>{formatTime(timeLeft)}</p>
                </div>
                <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {storeItems.map((item) => (
                        <div key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid justify-center mt-5">
                <img className="h-full w-full" src="/images/bannermerchandiseblue.jpg" alt="Banner" />
                <div className='flex relative bottom-20 left-10 w-[180px]'>
                    <div className='z-0'>
                        <NavLink to='/' className="relative inline-block text-lg group">
                            {/* ... NavLink content ... */}
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='grid mt-[100px] mb-[100px] justify-center '>
                <div className='flex mb-5 justify-between'>
                    <h1 className='text-[25px] font-bold text-[#3772ad]'>All Products</h1>
                </div>
                <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {allItems.map((item) => (
                        <div key={item.id}>
                            <AllStoreItems {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </UserProvider>
    );
};

export default OffersHome;