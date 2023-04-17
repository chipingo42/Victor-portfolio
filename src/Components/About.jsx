import React from 'react'
import {BsDot} from 'react-icons/bs'
import Footer from './Footer'
import Navbar from './Navbar'


const AboutObj = [
  {
    familiarStacks: [
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'JavaScript (ES6)',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'ReactJs',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'CSS3',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Typescript',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'TailwindCSS',
      },
    ],
    versionAndDeployment: [
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Git',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Github',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Netlify',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Vercel',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Cloudflare',
      }
    ],
    hobbies: [
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Cooking',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Fotball',
      },
      {
        icon:  <BsDot className=' text-[27px] text-white dark:text-[#000000]' />,
        title: 'Dancing',
      }
    ],
  },
]


const About = () => {

  const icons = `bg-[#FF6B6BE5] h-[20px] w-[20px] rounded-full flex items-center justify-center`
  const titleClass = `font-Poppins font-light text-[18px] text-black dark:text-white max-xs:text-[15px]`;

  return (
    <>
      <Navbar />
      <div className='py-20 bg-[#E5E5E5] w-full dark:bg-[#151D3B] dark:text-white overflow-x-hidden'>
        <svg className='h-[250px] relative top-[2px] max-md:h-[180px] max-xs:h-[140px]' viewBox="0 0 96 390" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-5.04033 203.387C8.08377 202.926 20.9885 199.885 32.9372 194.437C44.8858 188.988 55.6444 181.24 64.5985 171.634C73.5527 162.028 80.527 150.752 85.1235 138.45C89.7199 126.149 91.8484 113.062 91.3874 99.9384C90.9263 86.8143 87.8848 73.9095 82.4365 61.9608C76.9882 50.0122 69.2398 39.2537 59.6337 30.2995C50.0276 21.3454 38.7518 14.371 26.4503 9.77454C14.1488 5.1781 1.06244 3.04963 -12.0617 3.51066L-10.7977 39.4907C-2.39861 39.1956 5.97639 40.5578 13.8491 43.4994C21.7218 46.441 28.938 50.9045 35.0857 56.635C41.2334 62.3654 46.1922 69.2506 49.679 76.8975C53.1658 84.5444 55.1123 92.8031 55.4073 101.202C55.7024 109.601 54.3402 117.976 51.3986 125.849C48.457 133.722 43.9935 140.938 38.2631 147.086C32.5326 153.233 25.6474 158.192 18.0005 161.679C10.3537 165.166 2.09489 167.112 -6.30424 167.407L-5.04033 203.387Z" fill="#FF6B6B" fillOpacity="0.9"/>
          <path d="M-2.91184 389.212C9.97975 389.207 22.744 386.662 34.6521 381.723C46.5601 376.784 57.3789 369.549 66.4906 360.429C75.6022 351.309 82.8284 340.484 87.7565 328.571C92.6846 316.659 95.2181 303.892 95.2124 291.001C95.2066 278.109 92.6618 265.345 87.7231 253.437C82.7844 241.529 75.5486 230.71 66.4288 221.598C57.309 212.487 46.4838 205.261 34.5714 200.332C22.6589 195.404 9.8924 192.871 -2.9992 192.877L-2.98347 228.219C5.26686 228.216 13.4371 229.837 21.0609 232.991C28.6846 236.145 35.6124 240.769 41.4489 246.601C47.2854 252.432 51.9161 259.356 55.0768 266.976C58.2374 274.597 59.8661 282.766 59.8698 291.016C59.8734 299.267 58.252 307.437 55.0982 315.061C51.9443 322.685 47.3197 329.612 41.4884 335.449C35.6572 341.285 28.7334 345.916 21.1125 349.077C13.4916 352.237 5.32277 353.866 -2.92756 353.87L-2.91184 389.212Z" fill="#FF6B6B" fillOpacity="0.9"/>
        </svg>
        <div className='md:flex flex-col w-5/6 mx-auto md:h-5/6'>
          <div>
            <h3 className='pt-2 font-Metamorphous font-normal text-[40px] text-black dark:text-white max-md:text-[30px] max-sm:text-[25px] max-xs:text-[20px]'>Hello Recruiter,</h3>
            <h1 className=' font-Metamorphous font-bold text-[60px] pt-[10px] text-black leading-[74px] dark:text-white max-md:text-[40px] max-md:leading-[50px] max-sm:text-[40px] max-xs:text-[20px] max-xs:leading-[30px] '>My Journey in Tech <br /> Community</h1>
            <p className=' font-Poppins  font-light text-[25px] leading-[28px] text-black dark:text-white pt-6 max-md:text-[20px] max-xs:text-[14px] '>If you are here I strong believe we will be working closely or together as team soon. <br /> Keep scrolling let me talk you through my journey so far.</p>
            <button className='px-4 py-2 bg-[#FF6B6BE5] font-Poppins font-extralight rounded-md text-[20px] text-white mt-[15px] hover:bg-orange-500 transition duration-500'>Hire me</button>
          </div>
          <div className='absolute right-0 top-[43rem] max-xs:top-[37rem]'>
            <svg className='h-[250px] max-md:h-[180px] max-xs:h-[140px] '  viewBox="0 0 99 392" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.94 188.464C87.8155 188.918 74.9093 191.954 62.958 197.396C51.0068 202.839 40.2446 210.583 31.286 220.184C22.3273 229.786 15.3476 241.059 10.7454 253.358C6.14313 265.657 4.00849 278.743 4.46333 291.867C4.91817 304.991 7.95358 317.898 13.3963 329.849C18.8389 341.8 26.5823 352.562 36.1842 361.521C45.7861 370.48 57.0585 377.459 69.3579 382.062C81.6572 386.664 94.7426 388.798 107.867 388.344L106.62 352.363C98.2207 352.654 89.8463 351.288 81.975 348.343C74.1037 345.397 66.8896 340.93 60.7446 335.197C54.5996 329.464 49.644 322.576 46.1608 314.928C42.6776 307.279 40.735 299.019 40.4439 290.62C40.1529 282.221 41.519 273.847 44.4643 265.975C47.4096 258.104 51.8765 250.89 57.6098 244.745C63.3432 238.6 70.2307 233.644 77.8793 230.161C85.5278 226.678 93.7875 224.735 102.187 224.444L100.94 188.464Z" fill="#FF6B6B" fillOpacity="0.9"/>
              <path d="M99.1731 1.00274C86.2815 1.0024 73.5161 3.54125 61.6057 8.47433C49.6953 13.4074 38.8731 20.6381 29.7571 29.7536C20.6412 38.8691 13.4099 49.6909 8.47618 61.601C3.54247 73.5112 1.00294 86.2764 1.0026 99.168C1.00226 112.06 3.54111 124.825 8.47419 136.735C13.4073 148.646 20.638 159.468 29.7535 168.584C38.869 177.7 49.6907 184.931 61.6009 189.865C73.511 194.799 86.2763 197.338 99.1679 197.339L99.1688 161.996C90.9185 161.996 82.749 160.37 75.1268 157.213C67.5045 154.056 60.5789 149.428 54.7451 143.594C48.9114 137.76 44.2839 130.834 41.1269 123.211C37.9698 115.589 36.345 107.419 36.3452 99.169C36.3454 90.9186 37.9707 82.7491 41.1281 75.1269C44.2856 67.5047 48.9135 60.579 54.7475 54.7453C60.5815 48.9116 67.5074 44.2841 75.1298 41.127C82.7522 37.9699 90.9218 36.3451 99.1722 36.3454L99.1731 1.00274Z" fill="#FF6B6B" fillOpacity="0.9"/>
            </svg>
          </div>
          <div>
            <h1 className='font-Metamorphous pt-[180px] font-normal text-[70px] text-black dark:text-white max-xs:text-[50px]'>About Me</h1>
            <div className='md:w-full py-10 bg-white dark:bg-[#172450] mt-[12px] px-10 max-xs:px-5'>
              <div>
                <h2 className=' font-Poppins font-normal text-[25px] text-black dark:text-white '>Hello Recruiter,</h2>
                <p className=' font-Poppins font-normal text-[16px] pt-[13px] text-black dark:text-white  max-xs:text-[14px]'>I am Akalazu Victor a frontend engineer specialized in Javascript based in Imo state, Nigeria also a Chelsea United Fan. I have been in the tech community 2+ years now, working with javascript library such as <span className='text-[#FF6B6BE5]'>ReactJS.</span></p>
                <p className=' font-Poppins font-normal text-[16px] pt-[13px] text-black dark:text-white max-xs:text-[14px]'>In my years of experience I have worked local companies creating an impressive record and impact. Working closely with the UI/UX devs and Backend devs, keeping good relationship and communicating with the entire team. As a frontend engineer my sole priority is to implement the User Interface (UI), endpoint integration. Bring the UI prototype to reality.</p>
              </div>
              <div>
                <h1 className='font-Poppins font-[300] text-[20px] text-black dark:text-white mt-[18px]'>Stacks that I am familiar with:</h1>
                {AboutObj.map((familiarStack, i) => (
                  <div key={i}>
                    {familiarStack.familiarStacks.map((items, idx) => (
                      <div key={idx}>
                        <div className='mt-3 flex items-center gap-3'>
                          <span className={icons}>{items.icon}</span>
                          <p className={titleClass}>{items.title}</p>
                        </div>
                      </div>
                    ))}
                    <div>
                      <h1 className=' basis-2/5 font-Poppins font-light text-[20px] text-black dark:text-white mt-[18px] max-xs:text-[18px] '>Version Control & Deployment that I am familiar with:</h1>
                      {familiarStack.versionAndDeployment.map((items, i) => (
                        <div key={i} className='mt-3 flex items-center gap-3'>
                          <span className={icons}>{items.icon}</span>
                          <p className={titleClass}>{items.title}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h1 className='font-Poppins font-light text-[20px] text-black dark:text-white mt-[18px]'>My Hobbies:</h1>
                      {familiarStack.hobbies.map((items, idx) => (
                        <div key={idx} className='mt-3 flex items-center gap-3'>
                          <span className={icons}>{items.icon}</span>
                          <p className={titleClass}>{items.title}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h1 className='font-Poppins font-light text-[20px] text-black dark:text-white pt-[15px]'>Why I choose Tech:</h1>
                      <p className='font-Poppins font-normal text-[16px] pt-[13px] text-black dark:text-white max-xs:text-[14px]'>I really Want to make the Whole World a better place because With <strong>TECH</strong> everything is possible and i really Want to go across nations With <strong>Tech</strong> </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
