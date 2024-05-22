import styles from '../style';
import { Navbar } from '../components';
import { logoTZletter } from '../assets';

const Header = () => (
    <div className={`${styles.boxWidth} flex items-center py-3 relative box-shadow-nav`}>
        <div className="absolute z-[0] w-[72px] h-[72px] overflow-hidden top-0 bg-discount-gradient rounded-[10px]"></div>
        <div className="absolute z-[1] w-[72px] h-[72px] overflow-hidden top-0 bg-trizons bg-no-repeat"></div>
        <a className="block z-[5]" href="#home">
            <img src={logoTZletter} alt='trizons' className="w-[124px] h-[48px]" />
        </a>
        <Navbar />
    </div>
)

export default Header