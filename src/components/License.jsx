import { motion } from 'framer-motion';
import { license } from '../constants';
import styles from '../style';
import Button from './Button';
import { useState } from 'react';
import Modal from './Modal';
import Slider from './Slider';

const statsVar = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.7,
    }
  }),
  hidden: { opacity: 0, y: 100 }
};


const License = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(null);

  const openModal = (license) => {
    setSelectedLicense(license);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setSelectedLicense(null);
    setModalIsOpen(false);
  }

  return (
    <section id="license" className={`${styles.flexCenter} ${styles.paddingY} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className="mb-5 w-full">
        <p className={`${styles.paragraph} w-full`}>
          Работаем по всем нормативам — у нас есть лицензия МЧС, допуски СРО и СРО монтаж
        </p>
      </div>
      <div className={`flex-1 flex justify-start flex-col sm:flex-row m-3`}>
        {license.map((license, i) => (
          <motion.div
            key={license.id}
            variants={statsVar}
            initial='hidden'
            animate='visible'
            custom={i}
            className={`flex-1 flex justify-start flex-row m-3 sm:w-full`}>
            <Button
              styles={"w-full"}
              text={license.title}
              onClick={() => openModal(license.img)} />
          </motion.div>
        ))}
      </div>
      {selectedLicense && (
        <Modal
          status={modalIsOpen}
          setStatus={closeModal}
        >
          <Slider images={selectedLicense} />
        </Modal>
      )}
    </section >
  );
};

export default License