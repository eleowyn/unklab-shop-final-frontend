import React from 'react';

const About = () => {
    return ( 
        <>
            <div className='grid grid-cols-2 justify-center h-[1000px] items-center max-[1505px]:grid-cols-1'>
                <div className='text-start grid justify-center items-center'>
                    <h1 className='m-5 text-[27px] font-bold'>Our Story</h1>
                    <p className='m-5'>Launched in 2024, UNKLAB SHOP has been successfuly running with such a great income, UNKLAB Shop provides your need in just one click and it's close to your dormitory!,<br /> Exclusive has 1000 sells accross all UNKLAB. </p>
                    <p className='m-5'>Exclusive has more than 50 products to offer, growing at a very fast. <br /> Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className='flex justify-center'>
                    <img className='h-[500px] max-[748px]:h-[400px] rounded-lg' src="/images/banner-unklab.jpg" alt="" />
                </div>
            </div>
        </>
    );
}

export default About;