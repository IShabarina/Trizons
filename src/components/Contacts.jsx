import styles from "../style";
import { whatsapp } from "../assets";
import Button from "./Button";

const Contacts = () => (
  <section id="contacts" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Связаться с нами
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Вопросы, ответов на которые вы не нашли, можно задать нам напрямую.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 sm:w-[250px] w-full`}>
      {/* <Button text='Связаться с нами в WhatsApp' /> */}
      <a className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] flex flex-row `}
        href="https://wa.me/79296800530"
        >
        <p className="mr-2">Связаться в </p>
        <img src={whatsapp} alt="icon" className="w-[24px] h-[24px]" />
      </a>
    </div>
  </section>
)

export default Contacts