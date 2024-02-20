"use client";

import Image from "next/image";
import { useState } from "react";

const BLUR_IMAGE =
  "data:image/jpeg;base64,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";

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const handleClick = () => setHasBorder(!hasBorder);
   
  const borderClass = {
    border: 'shadow-md shadow-emerald-600',
    noBorder: 'border-none '
  }


  return (
    <section className="my-4 mx-2 md:grid md:gap-4 md:grid-cols-2 md:place-items-center  md:max-w-[1080px]">
      <div className="relative">
        <button onClick={handleClick}>
          <Image
            className={`my-4 object-cover rounded-md  w-[500px] h-[300px] ${hasBorder ? borderClass.border : borderClass.noBorder}`} 
            src="/images/description.jpeg"
            alt="Descripción"
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL={BLUR_IMAGE}
          />
        </button>
      </div>

      <div>
        <h1>Descripción</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          harum totam maxime ut autem laboriosam praesentium, est aliquid error
          tempora, iusto voluptatem culpa qui voluptates earum consequuntur,
          dignissimos officia facere.
        </p>
      </div>
    </section>
  );
};
