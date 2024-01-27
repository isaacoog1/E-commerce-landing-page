import React, { useEffect, useState } from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement;

    useEffect(() => {
        if(theme === 'dark') {
            element.classList.add('dark')
            localStorage.setItem("theme", 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

  return (
    <div className='relative'>
        <img src={LightButton} alt="" className={`w-12 cursor-pointer drop-shadow-[1px 1px 1px rgba(0,0,0,0.1)] transition-all duration-300 absolute z-10 right-0 ${theme === "dark" ? "opacity-0" : "opacity-100"} `} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <img src={DarkButton} alt="" className='w-12 cursor-pointer drop-shadow-[1px 1px 1px rgba(0,0,0,0.1)] transition-all duration-300' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    </div>
  )
}

export default DarkMode