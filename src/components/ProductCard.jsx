import { forwardRef } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export const ProductCard = forwardRef(({ content, name, title, img }, ref) => {
  return (
    <div ref={ref} className="item flex flex-col rounded-[20px] min-w-[85vw] ss:min-w-[30rem] h-full mx-3 product-card pointer-events-none">
      {/* <img src={img} alt={name} className="w-full rounded-[20px] bg-cover bg-product-card-gradient" /> */}
      <div className="flex flex-col justify-start overflow-hidden w-full h-full px-5 ss:px-10 py-5">
        <div className="flex flex-col min-h-[100px] max-w-[70%] mb-5 overflow-hidden">
          <h4 className="font-poppins font-semibold text-[14px] ss:text-[16px] ss:leading-[26px] text-white">{title}</h4>
          <p className="font-poppins font-normal text-[12px] leading-[18px] text-dimWhite">{name}</p>
        </div>
        <img src={img} alt={name} className="rounded-[20px] h-[320px] mb-5 bg-cover bg-product-card-gradient" />
        <p className="font-poppins font-normal text-[12px] ss:text-[14px] ss:leading-[25px] text-white">{content}</p>
      </div>
    </div>
  )
})

ProductCard.displayName = 'ProductCard';
export const MProductCard = motion(ProductCard);