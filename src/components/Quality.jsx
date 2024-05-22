import { motion } from "framer-motion";
import { forwardRef } from "react";

import { quality } from "../constants";
import styles, { layout } from "../style";
// import Button from './Button';

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

const qualityCardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
}

// eslint-disable-next-line react/prop-types
const QualityCard = forwardRef(function QualityCard({ icon, title, content, index }, ref) {
  return (
    <div ref={ref} className={`flex flex-row p-6 rounded-[20px] ${index !== quality.length - 1 ? "mb-6" : "mb-0"} quality-card w-full`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
});

const Quality = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      id="quality"
      className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 custom={1} variants={textAnimation} className={styles.heading2}>Качественное исполнение<br className="sm:block hidden" /> инженерных систем</motion.h2>
        <motion.p custom={2} variants={textAnimation} className={`${styles.paragraph} max-w-[470px] mt-5`}>От качества выполняемых нами работ зависят работоспособность и безопасность здания, поэтому процесс всегда сопровождается соблюдением ряда требований (ГОСТ, СП, ПУЭ)</motion.p>
        {/* <Button styles="mt-10" /> */}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={`${layout.sectionImg} flex-col`}>
        {quality.map((quality, index) => (
          <MQualityCard
            variants={qualityCardAnimation}
            custom={index + 1}
            key={quality.id}
            {...quality}
            index={index} />
        ))}
      </motion.div>
    </motion.section>
  )
}
const MQualityCard = motion(QualityCard);

export default Quality