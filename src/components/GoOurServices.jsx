import { motion } from "framer-motion";
import styles from "../style";
import { arrowUp } from "../assets";

const GoOurServices = () => (
  <motion.div
    whileHover={{ scale: [null, 1.2, 1.1] }}
    transition={{ duration: 0.3 }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <a href="#services">
        <div className={`${styles.flexStart} flex-row`}>

          <p className="fond-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">НАШИ</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow" />
        </div>
        <p className="fond-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">УСЛУГИ</span>
        </p>
      </a>
    </div>
  </motion.div>
)

export default GoOurServices