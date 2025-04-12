import styles from "../style";
import { logoTZ, logoTZcolor } from '../assets';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Footer = () => {
  const defaultState = {
    center: [55.754132068972545, 37.73506299999994],
    zoom: 14,
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`flex justify-between sm:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex sm:flex-col flex-row justify-start sm:mr-10 mb-2">
          <img src={logoTZ} alt="trizons" className="w-[100px] object-contain mb-2 sm:mr-16 mr-4" />
          <p className={`${styles.paragraph} max-w-[310px]`}> Выполняем поставленные задачи. Оправдываем доверие наших заказчиков.</p>
        </div>


        <div id="map" className="map bg-slate-500 sm:w-[30%] sm:h-[190px] w-full h-[190px] rounded-[20px] sm:mr-10 mr-0 sm:mb-10">
          <YMaps >
            <Map
              defaultState={defaultState}
              width="100%"
              height="190px"
            >
              <Placemark
                geometry={[55.754132068972545, 37.73506299999994]}
                options={
                  {
                    iconLayout: "default#image",
                    iconImageHref: logoTZcolor,
                    iconImageSize: [30, 30],
                    iconImageOffset: [0, 0],
                  }
                }
              />
            </Map>
          </YMaps>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-start sm:justify-end flex-wrap ss:mt-0 mt-10">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white"> Контакты </h4>
            <ul className="list-none mt-4">
              <li className="flex flex-row font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                <p className="mr-1 min-w-[70px]">Адрес</p>
                <p className="hover:text-secondary cursor-pointer">  105118, город Москва, ш Энтузиастов, д. 34, помещ. 5/2</p>
              </li>
              <li className="flex flex-row font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                <p className="mr-1 min-w-[70px]">Телефон</p>
                <p className="hover:text-secondary cursor-pointer">
                  <a href="tel:+79815514904">+7 981 551 49 04</a>
                </p>
              </li>
              <li className="flex flex-row font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-0">
                <p className="mr-1 min-w-[70px]">E-mail</p>
                <p className="hover:text-secondary cursor-pointer">
                  <a href="mailto:tz@trizons.ru">tz@trizons.ru</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2025. TRIZONS.</p>
        <div className="flex flex-row md:mt-0 mt-6">
        </div>
      </div>
    </section >
  );
};

export default Footer