import styles from "../style";
import { logoTZ } from '../assets';
import { footerLists } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`flex justify-between md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logoTZ} alt="trizons" className="w-[100px] object-contain mb-2" />
        <p className={`${styles.paragraph} mt4 max-w-[310px]`}> Выполняем поставленные задачи. Оправдываем доверие наших заказчиков.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
        {footerLists.map((footerList) => (
          <div key={footerList.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerList.title}
            </h4>
            <ul className="list-none mt-4">
              {footerList.items.map((details, index) => (
                <li key={details.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerList.items.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {details.name} {details.details}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2024. TRIZONS.</p>
      <div className="flex flex-row md:mt-0 mt-6">
        {/* {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
        ))} */}
      </div>
    </div>
  </section >
)

export default Footer