import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import database from '../firebase-config'; // Pastikan konfigurasi Firebase sudah benar
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { ProductId } = useParams(); // Mendapatkan ProductId dari URL
    const [storeItems, setStoreItems] = useState([]); // State untuk menyimpan data produk
    const [loading, setLoading] = useState(true); // State untuk mengelola status loading

    useEffect(() => {
        console.log('Fetching data from Firebase...'); // Log untuk debugging
        const itemsRef = ref(database, 'storeitems'); // Referensi ke path storeItems di Firebase

        onValue(
            itemsRef,
            (snapshot) => {
                const data = snapshot.val();
                console.log('Data fetched from Firebase:', data); // Debug log
                if (data) {
                    // Ubah data dari objek menjadi array
                    const itemsArray = Object.keys(data).map((key) => ({
                        id: key,
                        ...data[key],
                    }));
                    console.log('Transformed items:', itemsArray); // Debug log
                    setStoreItems(itemsArray);
                }
                setLoading(false); // Data selesai diambil
            },
            (error) => {
                console.error('Error fetching data from Firebase:', error); // Log jika ada error
                setLoading(false); // Berhenti loading jika terjadi error
            }
        );
    }, []);

    console.log('Current ProductId:', ProductId); // Debug log untuk URL param

    if (loading) {
        return <p>Loading...</p>; // Tampilkan pesan loading jika data sedang diambil
    }

    if (!storeItems.length) {
        return <p>No products found.</p>; // Tampilkan pesan jika tidak ada produk
    }

    return (
        <>
            {storeItems.map((item) => (
                item.id == ProductId && ( // Cek apakah id produk cocok dengan ProductId dari URL
                    <div key={item.id}>
                        <ProductItem {...item} />
                    </div>
                )
            ))}
        </>
    );
};

export default Product;