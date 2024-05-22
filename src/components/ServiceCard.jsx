import { motion } from "framer-motion";
import { forwardRef } from "react";

import { services } from "../constants";
import styles from "../style";

// eslint-disable-next-line react/prop-types
export const ServiceCard = forwardRef(function ServiceCard({ icon, title, content, details, index }, ref) {
  return (
    <div ref={ref} className={`flex flex-row p-6 rounded-[20px] ${index !== services.length - 1 ? "mb-6" : "mb-0"} service-card w-full`}>
      <div className={`w-[32px] h-[32px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        {/* <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" /> */}
      </div>
      <div className="flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
        {details.length > 0 ? (
          details.map((detail, i) => (
            <li key={i} className="text-white">
              {detail}
            </li>
          ))
        ) : (<></>)}
      </div>
    </div>
  );
})

export const MServiceCard = motion(ServiceCard);