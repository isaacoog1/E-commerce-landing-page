import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping }   from 'react-icons/fa6'
import DarkMode from './DarkMode'

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper navbar */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='text-2xl font-bold sm:text-3xl flex gap-2'>
                        <img src={logo} alt="logo" className='w-10' />
                        Shopsy
                    </a>
                </div>
                {/* search bar */}
                <div className='flex justify-between items-center gap-4'>
                    <div className="group relative hidden sm:block">
                        <input type="text" placeholder='Search' className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 border border-gray-300 rounded-full px-2 py-1 focus:outline-none focus:border-primary focus:border-1 dark:border-gray-500 dark:bg-gray-800" />
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                    </div>
                    {/* order button */}
                    <button onClick={() => handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 py-1 px-4 rounded-full text-white flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>
                    {/* Darkmode Switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        {/* lower navbar */}
        <div data-aos='zoom-in' className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {
                    Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                        </li>
                    ))
                }
                {/* Dropdown and links */}
                <li className='group relative cursor-pointer'>
                    <a href="#" className='flex items-center gap-[2px] py-2'>
                        Trending 
                        <span>
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] text-black rounded-md bg-white p-2 shadow-md'>
                        <ul>
                            {
                                DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block rounded-md w-full p-2 hover:bg-primary/20'>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar