import React from 'react';
import styles from '../styles/style';

const Hero = () => {
    <section className={`flex md:flex-row flex-col bg-Aubergine ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] 
                text-white ss:leading-[100px] leading-[75px]'>Welcome<br 
                className='sm:block hidden'/>{" "}To 
                <span>
                    </span>{" "}L-NFT
                </h1>
                <p className={`${styles.paragraph}`}>
                    Lorem
                </p>

            </div>
        </div>
    </section>


    
    return (
        <div>Hero</div>
    )
}

export default Hero