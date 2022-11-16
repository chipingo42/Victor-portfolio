import React from 'react'

const Home = () => {
  return (
    <div className='h-[100vh] w-full flex relative  '>
      <span className='relative top-[78px] h-0'>
        <svg className='flex justify-start h-[250px] md:h-[180px] sm:h-[129px]' viewBox="0 0 96 390" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-5.04033 203.387C8.08377 202.926 20.9885 199.885 32.9372 194.437C44.8858 188.988 55.6444 181.24 64.5985 171.634C73.5527 162.028 80.527 150.752 85.1235 138.45C89.7199 126.149 91.8484 113.062 91.3874 99.9384C90.9263 86.8143 87.8848 73.9095 82.4365 61.9608C76.9882 50.0122 69.2398 39.2537 59.6337 30.2995C50.0276 21.3454 38.7518 14.371 26.4503 9.77454C14.1488 5.1781 1.06244 3.04963 -12.0617 3.51066L-10.7977 39.4907C-2.39861 39.1956 5.97639 40.5578 13.8491 43.4994C21.7218 46.441 28.938 50.9045 35.0857 56.635C41.2334 62.3654 46.1922 69.2506 49.679 76.8975C53.1658 84.5444 55.1123 92.8031 55.4073 101.202C55.7024 109.601 54.3402 117.976 51.3986 125.849C48.457 133.722 43.9935 140.938 38.2631 147.086C32.5326 153.233 25.6474 158.192 18.0005 161.679C10.3537 165.166 2.09489 167.112 -6.30424 167.407L-5.04033 203.387Z" fill="#FF6B6B" fillOpacity="0.9"/>
            <path d="M-2.91184 389.212C9.97975 389.207 22.744 386.662 34.6521 381.723C46.5601 376.784 57.3789 369.549 66.4906 360.429C75.6022 351.309 82.8284 340.484 87.7565 328.571C92.6846 316.659 95.2181 303.892 95.2124 291.001C95.2066 278.109 92.6618 265.345 87.7231 253.437C82.7844 241.529 75.5486 230.71 66.4288 221.598C57.309 212.487 46.4838 205.261 34.5714 200.332C22.6589 195.404 9.8924 192.871 -2.9992 192.877L-2.98347 228.219C5.26686 228.216 13.4371 229.837 21.0609 232.991C28.6846 236.145 35.6124 240.769 41.4489 246.601C47.2854 252.432 51.9161 259.356 55.0768 266.976C58.2374 274.597 59.8661 282.766 59.8698 291.016C59.8734 299.267 58.252 307.437 55.0982 315.061C51.9443 322.685 47.3197 329.612 41.4884 335.449C35.6572 341.285 28.7334 345.916 21.1125 349.077C13.4916 352.237 5.32277 353.866 -2.92756 353.87L-2.91184 389.212Z" fill="#FF6B6B" fillOpacity="0.9"/>
        </svg>
      </span>

      <div className='max-w-[1200px] mx-auto sm:w-[300px] sm:dark:bg-[#151D3B] sm:h-full'>
        <div className='flex justify-center items-center md:block'>
          <span className='relative'>
            <svg className='h-[100px] absolute bottom-[10px] md:top-[145px] md:h-[70px] sm:top-[133px] sm:h-[59px]' viewBox="0 0 150 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="84" r="50" fill="#FF6B6B" fillOpacity="0.9"/>
              <circle cx="100" cy="120" r="50" fill="#EFA434" fillOpacity="0.22"/>
              <circle cx="100" cy="50" r="50" fill="#2B33E3" fillOpacity="0.62"/>
            </svg>
          </span>
          <div className='flex flex-col items-center justify-center  md:items-start md:justify-start'>
            <h1 className='font-Metamorphous font-[400] text-[40px] pt-[222px] text-[#000000] dark:text-[#fff] lg:text-[38px] md:pt-[240px] md:text-[25px] sm:pt-[220px] sm:text-[30px]'>Hello world,</h1>
            <h1 className=' font-Metamorphous font-[400] text-[48px] dark:text-[#fff] lg:text-[38px] md:text-[25px] md:min-h-[30px] sm:text-[38px] sm:py-[10px] sm:leading-[39px] '>I’m Akalazu Victor Chichebem</h1>
            <p className=' font-Metamorphous font-[400] text-[32px] text-gray-500 dark:text-gray-300 lg:text-[20px] lg:font-[100] md:min-h-[30px]  md:text-[17px] sm:text-[20px] sm:pt-[10px]'>a frontend engineer, specialised in javascript.</p>
            <div className='grid grid-cols-4 gap-2 items-center mt-[60px] lg:mt-[30px] sm:gap-1 '>
              <span className='flex items-center justify-center  bg-[#2B33E038] dark:bg-[#FF6B6BE5] w-[40px] h-[40px] rounded-full lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[30px] sm:h-[30px] '>
                <svg className=' fill-black dark:fill-white h-[18px] sm:h-[10px] ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6894 11.25L19.7265 7.63047H13.2419V5.28164C13.2419 4.29141 14.1478 3.32617 17.052 3.32617H20V0.244531C20 0.244531 17.3248 0 14.767 0C9.42674 0 5.93611 1.73359 5.93611 4.87187V7.63047H0V11.25H5.93611V20H13.2419V11.25H18.6894Z"/>
                </svg>
              </span>
              <span className='flex items-center justify-center bg-[#2B33E038] dark:bg-[#FF6B6BE5] w-[40px] h-[40px] rounded-full lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[30px] sm:h-[30px] '>
                <svg className=' fill-black dark:fill-white h-[18px] sm:h-[10px] ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9442 4.98436C17.9569 5.2031 17.9569 5.42188 17.9569 5.64062C17.9569 12.3125 13.8326 20 6.29444 20C3.97209 20 1.81473 19.1718 0 17.7344C0.329962 17.7812 0.64719 17.7969 0.989848 17.7969C2.90607 17.7969 4.67006 17 6.0787 15.6406C4.27666 15.5938 2.76649 14.1406 2.24618 12.1406C2.50001 12.1875 2.7538 12.2187 3.02032 12.2187C3.38833 12.2187 3.75638 12.1562 4.099 12.0469C2.22083 11.5781 0.812152 9.54687 0.812152 7.09374V7.03126C1.35782 7.40627 1.99239 7.64064 2.66493 7.67185C1.56087 6.76558 0.837542 5.21873 0.837542 3.46871C0.837542 2.53123 1.04055 1.67186 1.3959 0.921852C3.41369 3.98435 6.44671 5.98432 9.8477 6.2031C9.78426 5.8281 9.74617 5.43751 9.74617 5.04688C9.74617 2.2656 11.5736 0 13.8452 0C15.0254 0 16.0914 0.609373 16.8401 1.59375C17.7665 1.37501 18.6548 0.953114 19.4416 0.375003C19.137 1.5469 18.4898 2.53128 17.6396 3.15624C18.4645 3.04692 19.264 2.7656 20 2.37502C19.4417 3.37498 18.7437 4.26557 17.9442 4.98436Z"/>
                </svg>
              </span>
              <span className='flex items-center justify-center bg-[#2B33E038] dark:bg-[#FF6B6BE5] w-[40px] h-[40px] rounded-full lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[30px] sm:h-[30px] '>
                <svg className=' fill-black dark:fill-white h-[18px] sm:h-[10px] ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z"/>
                </svg>
              </span>
              <span className='flex items-center justify-center bg-[#2B33E038] dark:bg-[#FF6B6BE5] w-[40px] h-[40px] rounded-full lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[30px] sm:h-[30px] '>
                <svg className=' fill-black dark:fill-white h-[18px] sm:h-[10px] ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75417 13.786C7.75417 14.8746 7.3 16.6558 6.225 16.6558C5.15 16.6558 4.69583 14.8746 4.69583 13.786C4.69583 12.6975 5.15 10.9163 6.225 10.9163C7.3 10.9163 7.75417 12.6975 7.75417 13.786ZM20 11.1559C20 12.8173 19.8667 14.5777 19.2708 16.1037C17.6917 20.0932 13.35 19.9994 10.2417 19.9994C7.08333 19.9994 2.48333 20.14 0.841667 16.1037C0.233333 14.5933 0 12.8173 0 11.1559C0 8.97369 0.579167 6.91125 1.72917 5.23943C1.5125 4.41654 1.40833 3.55198 1.40833 2.69784C1.40833 1.57808 1.6125 1.01559 2.01667 0C3.90417 0 5.1125 0.468736 6.55 1.87494C7.75833 1.51558 9 1.35413 10.2458 1.35413C11.3708 1.35413 12.5042 1.50516 13.5958 1.83328C15.0125 0.442695 16.2208 0 18.0875 0C18.4958 1.01559 18.6958 1.57808 18.6958 2.69784C18.6958 3.55198 18.5875 4.40091 18.375 5.20818C19.5208 6.89563 20 8.97369 20 11.1559ZM17.3208 13.786C17.3208 11.4997 16.2083 9.48409 14.2583 9.48409C13.4708 9.48409 12.7167 9.66117 11.925 9.79658C11.3042 9.91637 10.6833 9.96325 10.0458 9.96325C9.4125 9.96325 8.79167 9.91637 8.16667 9.79658C7.3875 9.66117 6.625 9.48409 5.83333 9.48409C3.88333 9.48409 2.77083 11.4997 2.77083 13.786C2.77083 18.3588 6.12083 19.0619 9.0375 19.0619H11.0458C13.975 19.0619 17.3208 18.364 17.3208 13.786ZM13.8792 10.9163C12.8042 10.9163 12.35 12.6975 12.35 13.786C12.35 14.8746 12.8042 16.6558 13.8792 16.6558C14.9542 16.6558 15.4083 14.8746 15.4083 13.786C15.4083 12.6975 14.9542 10.9163 13.8792 10.9163Z"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-end '>
          <span>
            <svg className='h-[100px]  md:h-[70px] md:mt-[100px] sm:mt-[10px] sm:mr-[10px] sm:h-[59px]' viewBox="0 0 150 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="84" r="50" fill="#FF6B6B" fillOpacity="0.9"/>
              <circle cx="100" cy="120" r="50" fill="#EFA434" fillOpacity="0.22"/>
              <circle cx="100" cy="50" r="50" fill="#2B33E3" fillOpacity="0.62"/>
            </svg>
          </span>
          <span >
            <svg className='absolute right-0 bottom-0 h-[250px] md:h-[180px] sm:h-[129px] z-40 '  viewBox="0 0 99 392" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.94 188.464C87.8155 188.918 74.9093 191.954 62.958 197.396C51.0068 202.839 40.2446 210.583 31.286 220.184C22.3273 229.786 15.3476 241.059 10.7454 253.358C6.14313 265.657 4.00849 278.743 4.46333 291.867C4.91817 304.991 7.95358 317.898 13.3963 329.849C18.8389 341.8 26.5823 352.562 36.1842 361.521C45.7861 370.48 57.0585 377.459 69.3579 382.062C81.6572 386.664 94.7426 388.798 107.867 388.344L106.62 352.363C98.2207 352.654 89.8463 351.288 81.975 348.343C74.1037 345.397 66.8896 340.93 60.7446 335.197C54.5996 329.464 49.644 322.576 46.1608 314.928C42.6776 307.279 40.735 299.019 40.4439 290.62C40.1529 282.221 41.519 273.847 44.4643 265.975C47.4096 258.104 51.8765 250.89 57.6098 244.745C63.3432 238.6 70.2307 233.644 77.8793 230.161C85.5278 226.678 93.7875 224.735 102.187 224.444L100.94 188.464Z" fill="#FF6B6B" fillOpacity="0.9"/>
            <path d="M99.1731 1.00274C86.2815 1.0024 73.5161 3.54125 61.6057 8.47433C49.6953 13.4074 38.8731 20.6381 29.7571 29.7536C20.6412 38.8691 13.4099 49.6909 8.47618 61.601C3.54247 73.5112 1.00294 86.2764 1.0026 99.168C1.00226 112.06 3.54111 124.825 8.47419 136.735C13.4073 148.646 20.638 159.468 29.7535 168.584C38.869 177.7 49.6907 184.931 61.6009 189.865C73.511 194.799 86.2763 197.338 99.1679 197.339L99.1688 161.996C90.9185 161.996 82.749 160.37 75.1268 157.213C67.5045 154.056 60.5789 149.428 54.7451 143.594C48.9114 137.76 44.2839 130.834 41.1269 123.211C37.9698 115.589 36.345 107.419 36.3452 99.169C36.3454 90.9186 37.9707 82.7491 41.1281 75.1269C44.2856 67.5047 48.9135 60.579 54.7475 54.7453C60.5815 48.9116 67.5074 44.2841 75.1298 41.127C82.7522 37.9699 90.9218 36.3451 99.1722 36.3454L99.1731 1.00274Z" fill="#FF6B6B" fillOpacity="0.9"/>
            </svg>
          </span>
        </div>
        <p className='flex items-center justify-center pt-20 sm:items-start font-Metamorphous font-[400] text-[17px] text-[#000000] dark:text-[#fff] md:text-[10px] md:font-[200]  sm:text-[13px]  sm:absolute sm:bottom-4 sm:left-0  '>
          Copyright © 2022 designed by Akalazu Victor All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Home;