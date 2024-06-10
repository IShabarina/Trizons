import { motion } from "framer-motion";
import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { MServiceCard } from "./ServiceCard";

const servicesAnimation = {
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


const Services = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    id="services"
    className={`${layout.section} bg-service bg-no-repeat bg-cover`}>
    <motion.div
      custom={1} variants={servicesAnimation}
      className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Основные виды работ, <br className="sm:block hidden" />  на которых мы специализируемся</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Выполняем монтаж и ремонт существующих инженерных коммуникаций привлекая наших постоянных опытных сотрудников, готовых решить любую сложную задачу и используя современное технологическое оборудование и инструменты</p>
      <Button styles="mt-10" text="Связаться с нами" />
    </motion.div>

    <motion.div
      custom={1}
      variants={servicesAnimation}
      className={`${layout.sectionImg} flex-col`}>
      {services.map((card, index) => (
        <MServiceCard
          variants={servicesAnimation}
          custom={index + 1}
          key={card.id} {...card} />
      ))}
    </motion.div>
  </motion.section>
)

export default Services