/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { useState } from 'react';

import { BLUR_IMAGE } from './constants';

export const Description = () => {
    const [hasBorder, setHasBorder] = useState(false);
    const handleClick = () => setHasBorder(!hasBorder);

    const borderClass = {
        border: 'shadow-md shadow-emerald-600',
        noBorder: 'border-none ',
    };

    return (
        <section className='self-center my-4 mx-4 md:grid md:gap-4 md:grid-cols-2 md:place-items-center md:max-w-[1080px] md:justify-items-end'>
            <div>
                <button onClick={handleClick}>
                    <Image
                        className={`my-4 object-cover rounded-md  w-[350px] h-[250px] ${
                            hasBorder
                                ? borderClass.border
                                : borderClass.noBorder
                        }`}
                        src='/images/description.jpeg'
                        alt='Descripción'
                        width={500}
                        height={300}
                        placeholder='blur'
                        blurDataURL={BLUR_IMAGE}
                    />
                </button>
            </div>

            <div>
                <h1 className='text-2xl text-left'>
                    Bring the future today to your live
                </h1>
                <p className='text-balance text-left'>
                    Future World: Your Gateway to Tomorrow's Tech! Dive into a
                    world of cutting-edge gadgets and gear. Stay ahead of the
                    curve and redefine your digital lifestyle with us.
                </p>
            </div>
        </section>
    );
};
