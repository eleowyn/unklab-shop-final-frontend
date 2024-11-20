import React, { useEffect, useState } from 'react';
import database from '../firebase-config'; // Sesuaikan path sesuai kebutuhan
import { ref, onValue } from 'firebase/database';

const About = () => {
    const [content, setContent] = useState({ par1: '', par2: '', img: '' });

    useEffect(() => {
        const contentRef = ref(database, 'aboutUs');
        onValue(contentRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setContent({
                    par1: data.par1,
                    par2: data.par2,
                    img: data.img, // Ambil data img
                });
            }
        });
    }, []);

    return (
        <>
            <div className='grid grid-cols-2 justify-center h-[1000px] items-center max-[1505px]:grid-cols-1'>
                <div className='text-start grid justify-center items-center'>
                    <h1 className='m-5 text-[27px] font-bold'>Our Story</h1>
                    <p className='m-5'>{content.par1}</p>
                    <p className='m-5'>{content.par2}</p>
                </div>
                <div className='flex justify-center'>
                    {content.img ? (
                        <img 
                            className='h-[500px] max-[748px]:h-[400px] rounded-lg' 
                            src={content.img} 
                            alt="Dynamic Image" 
                        />
                    ) : (
                        <p>Loading image...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default About;
