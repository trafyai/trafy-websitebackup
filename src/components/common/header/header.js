'use client'
import '@styles/common/header/Header.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef , useEffect} from "react";
import WhiteLogo from '@public/assets/Images/comman/header/whiteLogo.png';
import BlackLogo from '@public/assets/Images/comman/header/blackLogo.png';
import close from '@public/assets/Images/comman/header/close.png';
import close1 from '@public/assets/Images/comman/header/close (1).png';
import whiteHamburger from '@public/assets/Images/comman/header/wLogo (2).png';
import blackHamburger from '@public/assets/Images/comman/header/bLogo.png';

import { useTheme } from 'next-themes';
import Light from '@public/assets/Images/comman/common/light_mode.png';
import Dark from '@public/assets/Images/comman/common/dark_mode.png';

function Header({ initialTheme }) { // Add initialTheme prop here
  const [lTheme, setLtheme] = useState(initialTheme === 'light');
  const [dTheme, setDtheme] = useState(initialTheme === 'dark');
  const [dropTheme,setDroptheme] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null); // Ref for timeout
  const { theme, setTheme } = useTheme();

 
  function lthemeChange() {
    
      setTheme('light');
      setLtheme(!lTheme);
   
  }
  function dthemeChange() {
   
      setTheme('dark');
      setDtheme(!dTheme);
   
  }

  function themeDropDown(){
    setDroptheme(!dropTheme);
  }
  useEffect(() => {
    // Call theme change functions on component mount (to ensure initial render)
    if (lTheme) lthemeChange();
    if (dTheme) dthemeChange();
  }, [lTheme, dTheme]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow'); 
  }

  // Close the menu when navigating to a different page
  function handleNavigation() {
    setMenuOpen(false);
    document.body.classList.remove('overflow'); 
  }

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setHover(true); // Show dropdown
  }

  const handleMouseLeave = () => {
    // Set timeout to hide dropdown after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setHover(false);
    }, 200);
  }
  function handleNavigation() {
    setMenuOpen(false);
    document.body.classList.remove('overflow'); // Ensure overflow class is removed when navigating
  }

  return (
    <header className="header">
      <nav className="header-container">
        <div className="logo">
          <Link href="/"> <Image src={WhiteLogo} alt="trafy logo"  height={32} className="header-white-logo" /></Link>
          <Link href="/"> <Image src={BlackLogo} alt="trafy logo"  height={32} className="header-black-logo" /></Link>
        </div>

        <div className={`header-contents ${menuOpen ? 'show-contents' : ''}`}>

          <div className="header-contents-first">
            <button className="header-academy" onClick={handleNavigation}><Link href="/courses">Courses</Link></button>
            <button className="header-resources" onClick={handleNavigation}><Link href="/blogs"> Resources </Link></button>
          </div>

          <div className="header-contents-second">
            <Link href="/login" className="header-login" onClick={handleNavigation}> Login</Link>
            <Link href="/signup" className="header-signup" onClick={handleNavigation}> Sign Up Free</Link>
            <div className='header-theme-icons'>
            <Image
            src={Light}
            onClick={lthemeChange}
            width="20"
            height="20"
            className=" light-mode-icon"
          />
          <Image
            src={Dark}
            onClick={dthemeChange}
            width="20"
            height="20"
            className=" dark-mode-icon"
          />
            </div>
          



          </div>
          

        </div>
      </nav>
      
      <div className='header-hambug-container'>
      <div className='header-theme-icons-tab'>
            <Image
            src={Light}
            onClick={lthemeChange}
            width="20"
            height="20"
            className=" light-mode-icon"
          />
          <Image
            src={Dark}
            onClick={dthemeChange}
            width="20"
            height="20"
            className=" dark-mode-icon"
          />
            </div>
      <Image src={whiteHamburger} alt="" className={`whitehamburger ${menuOpen ? 'hide' : ''}`} style={{width:"30px",height:"20px"}}  onClick={toggleMenu} />
      <Image src={blackHamburger} alt="" className={`blackhamburger ${menuOpen ? 'hide' : ''}`} style={{width:"30px",height:"20px"}}  onClick={toggleMenu} />
      <Image src={close} alt="" className={`white-exit-icon ${menuOpen ? 'show' : ''}`} style={{width:"20px",height:"20px"}} onClick={toggleMenu} />
      <Image src={close1} alt="" className={`black-exit-icon ${menuOpen ? 'show' : ''}`} style={{width:"20px",height:"20px"}} onClick={toggleMenu} />
      </div>

      
    </header>
  );
}

Header.getInitialProps = async (ctx) => {
  // Fetch theme data from server
  const theme = await fetchThemeData();

  return {
    initialTheme: theme,
  };
};

export default Header;

