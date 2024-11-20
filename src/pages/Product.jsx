import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase-config';
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { ProductId } = useParams();
    const [storeItems, setStoreItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Fetching data from Firebase...');
        const itemsRef = ref(database, 'offers');

        onValue(
            itemsRef,
            (snapshot) => {
                const data = snapshot.val();
                console.log('Data fetched from Firebase:', data);
                if (data) {
                    
                    const itemsArray = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key],
                    }));
                    console.log('Transformed items:', itemsArray);
                    setStoreItems(itemsArray);
                }
                setLoading(false);
            },
            (error) => {
                console.error('Error fetching data from Firebase:', error);
                setLoading(false);
            }
        );
    }, []);

    console.log('Current ProductId:', ProductId);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!storeItems.length) {
        return <p>No products found.</p>;
    }

    return (
        <>
            {storeItems.map((item) => (
                item.id == ProductId && (
                    <div key={item.id}>
                        <ProductItem {...item} />
                    </div>
                )
            ))}
        </>
    );
};

export default Product;