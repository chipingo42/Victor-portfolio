import React,  { useDarkmode } from '../Hook/useDarkmode';
import {IoAppsSharp} from 'react-icons/io5'
import {BsBookmarkFill} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../Hook/useMediaQuery';




const Navbar = () => {

  const [colorTheme, setTheme] = useDarkmode();
  const [navOpen, setNavOpen] = useState(false);
  const flexBetween = `flex justify-between items-center`
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
 

  return (
    <nav>
      <div className={`${flexBetween} fixed z-30 bg-[#FAF9F8] w-full shadow-lg dark:bg-[#151D3B]`}>
        <div className={`${flexBetween} w-11/12 mx-auto`}>
          <div className={`${flexBetween} w-full py-3  gap-16 `}>
            <Link to='/' className='flex-1'>
              <h1 className='text-[40px] dark:text-white font-Metamorphous'><span className='text-[#2B33E3]'>V</span><span className='text-[#FF6B6B]'>ictor</span></h1>
            </Link>
            {isAboveMediumScreens ? ( 
              <ul className={`${flexBetween} space-x-[52px] mr-[30px] `}>
                <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
                  <Link to="/">#Home</Link>
                </li>
                <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
                  <Link to="/About">#About</Link>
                </li>
                <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
                  <Link to="/Projects">#Projects</Link>
                </li>
                <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
                  <a href="https://drive.google.com/file/d/1H2yu83BTRELQX9T8vU_TLOSdKBrqkDHz/view?usp=share_link">#Resum</a>
                </li>
                <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
                  <Link to="/Contact">#Contact</Link>
                </li>
              </ul>) : (
              <button onClick={() => setNavOpen(!navOpen)}>
                <IoAppsSharp className='dark:text-[#fff] absolute right-16 top-8 ' />
              </button>
            )}
            <div>
              <span onClick={() => setTheme(colorTheme)} className='flex'>
                {colorTheme === 'light' ? (
                  <svg style={{width: '20px'}} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0007 9.375C11.901 9.375 9.37545 11.9004 9.37545 15C9.37545 18.0996 11.901 20.625 15.0007 20.625C18.1005 20.625 20.626 18.0996 20.626 15C20.626 11.9004 18.1005 9.375 15.0007 9.375ZM29.4389 14.0918L23.8898 11.3203L25.8528 5.4375C26.1165 4.64062 25.3606 3.88477 24.5695 4.1543L18.6865 6.11719L15.909 0.5625C15.534 -0.1875 14.4675 -0.1875 14.0925 0.5625L11.3209 6.11133L5.4319 4.14844C4.63499 3.88477 3.87909 4.64062 4.14864 5.43164L6.11162 11.3145L0.562527 14.0918C-0.187509 14.4668 -0.187509 15.5332 0.562527 15.9082L6.11162 18.6797L4.14864 24.5684C3.88495 25.3652 4.64085 26.1211 5.4319 25.8516L11.315 23.8887L14.0866 29.4375C14.4616 30.1875 15.5281 30.1875 15.9031 29.4375L18.6747 23.8887L24.5578 25.8516C25.3547 26.1152 26.1106 25.3594 25.8411 24.5684L23.8781 18.6855L29.4272 15.9141C30.189 15.5332 30.189 14.4668 29.4389 14.0918ZM20.3037 20.3027C17.3797 23.2266 12.6217 23.2266 9.69774 20.3027C6.77377 17.3789 6.77377 12.6211 9.69774 9.69727C12.6217 6.77344 17.3797 6.77344 20.3037 9.69727C23.2277 12.6211 23.2277 17.3789 20.3037 20.3027Z" fill="#F5F5F5"/>
                  </svg>
                ) : (
                <svg style={{width: '20px'}} width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.784 30.059C21.9609 30.059 26.6891 27.9499 29.8216 24.4938C30.285 23.9826 29.7797 23.2357 29.0635 23.3578C20.9205 24.7465 13.4425 19.1557 13.4425 11.7949C13.4425 7.55478 15.9773 3.65575 20.0969 1.55637C20.732 1.23277 20.5723 0.370629 19.8507 0.251274C18.8391 0.0842433 17.8126 0.000137164 16.784 0C7.51943 0 0 6.72282 0 15.0295C0 23.3256 7.50763 30.059 16.784 30.059Z" fill="black"/>
                </svg>)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && navOpen && (
        <ul className='absolute z-50 top-20 right-0 w-4/6 shadow-xl max-md:bg-[#363d55] py-10 text-white rounded-md  space-y-[20px] pl-[26px]'>
          <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
            <Link to="/" className='flex items-center space-x-5' onClick={() => setNavOpen(!navOpen)}>
              <IoAppsSharp />
              <span>Home</span>
            </Link>
          </li>
          <Link to="/About" className='flex items-center space-x-5' onClick={() => setNavOpen(!navOpen)}>
            <FaBook />
            <span>About</span>
          </Link>
          <Link to="/Projects" className='flex items-center space-x-5' onClick={() => setNavOpen(!navOpen)}>
            <VscProject />
            <span>Projects</span>
          </Link>
          <li>
            <a className='flex items-center space-x-5' href="https://docs.google.com/document/d/1mZq7PwC7GOdkUc5enMje6BuGs0B9knDp4CZJ2feKZvA/edit?usp=share_link">
              <BsBookmarkFill />
              <span>Resum</span>
            </a>
          </li>
          <Link to="/Contact" className='flex items-center space-x-5' onClick={() => setNavOpen(!navOpen)}>
            <RiContactsFill />
            <span>Contact</span>
          </Link>
        </ul> 
      )}
    </nav>
  )
}

export default Navbar;



