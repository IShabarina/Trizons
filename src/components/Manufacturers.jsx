import { manufacturers } from "../constants";
import styles from "../style";

const Manufacturers = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col my-4 manufacturers`}>
    <div className="mb-5 w-full">
      <p className={`${styles.paragraph} w-full`}>Сотрудничаем с ведущими поставщиками оборудования и материалов на территории РФ</p>
    </div>
    <div className={`${styles.flexCenter} w-full h-[60px] manufacturers-wraper`}>
      {manufacturers.map((manufacturer) => (
        <div key={manufacturer.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] max-h-full mx-2 manufacturers-item`}>
          <img src={manufacturer.logo} alt="manufacturer" className="object-contain max-h-full" />
        </div>
      ))}
    </div>
  </section>
)

export default Manufacturers