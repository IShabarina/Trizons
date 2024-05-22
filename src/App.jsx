import styles from './style';
import { Header, Hero, License, Quality, Confidence, Services, Products, Manufacturers, Contacts, Footer } from './components';


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 left-0 w-full z-50 bg-[#0e0c15e6] bg-opacity-90 lg:backdrop-blur-md bg-n-8/90 backdrop-blur-sm`}>
      <Header />
    </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} py-16`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Quality />
        <Confidence />
        <Services />
        <Products />
        <Manufacturers />
        <License />
        <Contacts />
        <Footer />
      </div>
    </div>

  </div>
);

export default App