import styles, { layout } from "../style";
import { shield, robotTZ } from "../assets";
import GoOurServices from './GoOurServices';
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

const imgAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}

const Hero = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    id="home"
    className={`${layout.section}`}
  >
    <motion.div custom={1} variants={textAnimation} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]  mb-2">
        <img src={shield} alt="icon" className="w-[24px] h-[24px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">100%</span> Ваш {" "}
          <span className="text-white">надежный</span> партнер
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[46px] text-white ss:leading-[100px] leading-[75px]">
          Монтаж <br className="sm:block hidden" />{" "}
          <span className="text-gradient tracking-wide">ИНЖЕНЕРНЫХ</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GoOurServices />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        систем
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Компания ООО Тризонс осуществляет комплекс работ, направленных на создание и запуск функционирующих инженерных систем,
        специализируется на широком спектре услуг, обеспечивающих комфорт и безопасность участников жиздедеятельности зданий и сооружений.
      </p>
    </motion.div>

    <motion.div custom={2} variants={imgAnimation} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robotTZ} alt="robot" className="w-[100%] h-[100%] relative z-[5] object-contain" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </motion.div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GoOurServices />
    </div>
  </motion.section>
)

export default Hero