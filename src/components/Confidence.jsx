import { motion } from "framer-motion";
import { billTZ } from "../assets";
import styles, { layout } from "../style";

const confidenceAnimation = {
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

const Confidence = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3 }}
    id="confidence"
    className={layout.sectionReverse}>
    <motion.div className={layout.sectionImgReverse}>
      <motion.img custom={2} variants={confidenceAnimation} src={billTZ} alt="confidence" className="w-[100%] h-[100%] relative z-[5] " />
      <div className="absolute z-[3] -left-1/2  top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2  bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </motion.div>

    <motion.div custom={2} variants={confidenceAnimation} className={layout.sectionInfo}>
      <motion.h2 className={styles.heading2}>С нами надежно, <br className="sm:block hidden" /> а значит комфортно</motion.h2>
      <motion.p className={`${styles.paragraph} max-w-[470px] mt-5`}>Нам доверяют свои проекты повторно, обращаются впервые и приходят по рекомендации. </motion.p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div> */}
    </motion.div>
  </motion.section>
)

export default Confidence