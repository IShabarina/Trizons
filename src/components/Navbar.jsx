import { useState } from 'react'
import { close, menu } from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-3 justify-between items-center navbar relative">
      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal 
            cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
            text-white tracking-wider hover:text-secondary`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-[-24px] min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal 
                ursor-pointer text-[16px] 
                ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
               text-white`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle((prev) => !prev)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar