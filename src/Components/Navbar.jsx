import React,  { useDarkmode } from '../Hook/useDarkmode';
import {IoAppsSharp} from 'react-icons/io5'
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {

  const [colorTheme, setTheme] = useDarkmode();
  const [navOpen, setNavOpen] = useState(false);
  const handleClickNavOpen = () => setNavOpen(!navOpen);

  return (
    <nav className='fixed top-0 z-10 bg-white h-[72px] w-full shadow-xl dark:bg-[#151D3B] '>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center md:mx-[10px]'>
          <div className='flex-1'>
            <svg className='mt-[10px] fill-black dark:fill-white' style={{width: '50px', height: '70px'}} width="60" height="91" viewBox="0 0 60 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7734 44.5625C26.8672 44.5625 29.7188 43.5547 32.3281 41.5391L33.6641 42.8281C31.8359 45.0469 29.2969 46.5156 26.0469 47.2344C25.0156 47.4531 23.9844 47.5625 22.9531 47.5625C18.9062 47.5625 15.6875 46.0625 13.2969 43.0625C11.0938 40.2656 9.99219 36.8281 9.99219 32.75C9.99219 28.5156 11.1094 25.0156 13.3438 22.25C15.75 19.2969 18.9844 17.8203 23.0469 17.8203C25.0469 17.8203 26.9766 18.2188 28.8359 19.0156C29.1172 19.1406 29.3203 19.2109 29.4453 19.2266C30.4609 18.9609 31.0625 18.3281 31.25 17.3281H33.1016V27.3594H31.1562C30.3125 22.6562 27.7266 20.3047 23.3984 20.3047C20.6172 20.3047 18.5312 21.5938 17.1406 24.1719C15.9375 26.3594 15.3359 29.2344 15.3359 32.7969C15.3359 38.9062 17.1875 42.6719 20.8906 44.0938C21.7188 44.4062 22.6797 44.5625 23.7734 44.5625Z" />
            <path d="M30.0938 33.0234C30.1719 32.0859 30.2109 31.3438 30.2109 30.7969C30.2109 29.625 30.0859 28.6328 29.8359 27.8203C29.6016 26.9922 29.1797 26.3047 28.5703 25.7578C27.9609 25.1953 27.25 24.7266 26.4375 24.3516C24.75 23.5859 23.0156 23.2031 21.2344 23.2031C19.4688 23.2031 17.9688 23.4297 16.7344 23.8828C15.5 24.3203 14.4141 24.9219 13.4766 25.6875C12.5547 26.4531 11.7656 27.3594 11.1094 28.4062C10.4531 29.4531 9.92188 30.5781 9.51562 31.7812C8.71875 34.0781 8.32031 36.6406 8.32031 39.4688C8.32031 43.3438 9.36719 46.6875 11.4609 49.5C12.9453 51.4688 14.9609 52.8594 17.5078 53.6719C18.8047 54.0938 20.1484 54.3047 21.5391 54.3047C22.9297 54.3047 24.125 54.2266 25.125 54.0703C26.125 53.8984 27.0625 53.6406 27.9375 53.2969C29.6875 52.6406 31.2969 51.5938 32.7656 50.1562L33.9375 51.7266C32.7344 53.5234 31.0312 54.9531 28.8281 56.0156C26.6406 57.0625 24 57.5859 20.9062 57.5859C15.1875 57.5859 10.6719 55.7344 7.35938 52.0312C4.32812 48.6094 2.8125 44.3672 2.8125 39.3047C2.8125 36.1328 3.5 33.1406 4.875 30.3281C7.09375 25.8125 10.6406 22.8281 15.5156 21.375C17.1875 20.8906 18.7109 20.6484 20.0859 20.6484C21.4609 20.6484 22.4609 20.6875 23.0859 20.7656C23.7109 20.8281 24.2812 20.9219 24.7969 21.0469C25.3125 21.1562 25.7812 21.2812 26.2031 21.4219L27.3984 21.8203C28.7578 22.2891 29.8281 22.5234 30.6094 22.5234C31.3906 22.5234 32.2578 21.8828 33.2109 20.6016H35.4375L32.3438 33.0234H30.0938Z"/>
            </svg>
          </div>
          <div  onClick={handleClickNavOpen}>
            <IoAppsSharp className='hidden md:flex mr-[20px] dark:text-[#fff]' />
          </div>
          <ul className='flex justify-between space-x-[52px] mr-[30px] md:hidden'>
            <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
             <Link to="/">#Home</Link>
            </li>
            <CustomLink to="/About">#About</CustomLink>
            <CustomLink to="/Projects">#Projects</CustomLink>
            <CustomLink to="/Resum">#Resum</CustomLink>
            <CustomLink to="/Contact">#Contact</CustomLink>
          </ul>
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
          <ul className={!navOpen ? 'hidden' : 'hidden absolute right-0 top-[77px] shadow-xl md:block md:w-[230px] md:h-[250px] md:bg-[#405089] pt-[15px] rounded-md justify-between space-y-[15px] mr-[10px] pl-[26px]'}>
            <li className='hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]'>
              <Link to="/">#Home</Link>
            </li>
            <CustomLink to="/About">#About</CustomLink>
            <CustomLink to="/Projects">#Projects</CustomLink>
            <CustomLink to="/Resum">#Resum</CustomLink>
            <CustomLink to="/Contact">#Contact</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? "hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]" : "hover:text-[#B10808] dark:text-[#fff] dark:hover:text-[#B10808]"}>
      <Link to={to} {...props} >
        {children}
      </Link>
    </li>
  )
}
