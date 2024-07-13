import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { product } from '../constants';
import styles from "../style";
import { MProductCard } from "./ProductCard";


const Products = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section id="products" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"> </div>

      <div className="w-full flex justify-between  items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Реализованные <br className="sm:block hidden" />  работы
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}> Решаем задачи, требующие индивидуального подхода и в сжатые сроки,  благодаря своевременному контролю всех этапов </p>
        </div>
      </div>

      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel flex w-full h-[620px] py-3 relative z-[1] cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex h-full">
          {product.map((card) => (
            <MProductCard
              whileTap={{ scale: 0.8 }}
              whileDrag={{ scale: 0.8 }}
              // transition={{ duration: 0.3 }}
              key={card.id} {...card} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Products