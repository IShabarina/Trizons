import styles from "../style";
import { whatsapp } from "../assets";
import Link from "./Link";

const Contacts = () => (
  <section id="contacts" className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Связаться с нами
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Вопросы, ответов на которые вы не нашли, можно задать нам напрямую.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 sm:w-[250px] w-full`}>
      <Link styles={"w-full"} href={"https://wa.me/79296800530"} text={"Связаться"} image={whatsapp} />
    </div>
  </section>
)

export default Contacts