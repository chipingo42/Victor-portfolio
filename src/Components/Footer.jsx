import React from 'react'



const Footer = () => {
  return (
    <div className='bg-white w-full h-[198px] dark:bg-[#151D3B] relative'>
      <div className=' max-w-[1200px] mx-auto '>
        <div className='flex items-center justify-between md:mx-[20px] sm:block'>
          <div className='flex-1 space-y-6 items-center mt-[50px]'>
            <span className='flex items-center h-0'>
              <svg className='mt-[10px] fill-black dark:fill-white' style={{width: '50px', height: '70px'}} width="60" height="91" viewBox="0 0 60 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7734 44.5625C26.8672 44.5625 29.7188 43.5547 32.3281 41.5391L33.6641 42.8281C31.8359 45.0469 29.2969 46.5156 26.0469 47.2344C25.0156 47.4531 23.9844 47.5625 22.9531 47.5625C18.9062 47.5625 15.6875 46.0625 13.2969 43.0625C11.0938 40.2656 9.99219 36.8281 9.99219 32.75C9.99219 28.5156 11.1094 25.0156 13.3438 22.25C15.75 19.2969 18.9844 17.8203 23.0469 17.8203C25.0469 17.8203 26.9766 18.2188 28.8359 19.0156C29.1172 19.1406 29.3203 19.2109 29.4453 19.2266C30.4609 18.9609 31.0625 18.3281 31.25 17.3281H33.1016V27.3594H31.1562C30.3125 22.6562 27.7266 20.3047 23.3984 20.3047C20.6172 20.3047 18.5312 21.5938 17.1406 24.1719C15.9375 26.3594 15.3359 29.2344 15.3359 32.7969C15.3359 38.9062 17.1875 42.6719 20.8906 44.0938C21.7188 44.4062 22.6797 44.5625 23.7734 44.5625Z" />
                <path d="M30.0938 33.0234C30.1719 32.0859 30.2109 31.3438 30.2109 30.7969C30.2109 29.625 30.0859 28.6328 29.8359 27.8203C29.6016 26.9922 29.1797 26.3047 28.5703 25.7578C27.9609 25.1953 27.25 24.7266 26.4375 24.3516C24.75 23.5859 23.0156 23.2031 21.2344 23.2031C19.4688 23.2031 17.9688 23.4297 16.7344 23.8828C15.5 24.3203 14.4141 24.9219 13.4766 25.6875C12.5547 26.4531 11.7656 27.3594 11.1094 28.4062C10.4531 29.4531 9.92188 30.5781 9.51562 31.7812C8.71875 34.0781 8.32031 36.6406 8.32031 39.4688C8.32031 43.3438 9.36719 46.6875 11.4609 49.5C12.9453 51.4688 14.9609 52.8594 17.5078 53.6719C18.8047 54.0938 20.1484 54.3047 21.5391 54.3047C22.9297 54.3047 24.125 54.2266 25.125 54.0703C26.125 53.8984 27.0625 53.6406 27.9375 53.2969C29.6875 52.6406 31.2969 51.5938 32.7656 50.1562L33.9375 51.7266C32.7344 53.5234 31.0312 54.9531 28.8281 56.0156C26.6406 57.0625 24 57.5859 20.9062 57.5859C15.1875 57.5859 10.6719 55.7344 7.35938 52.0312C4.32812 48.6094 2.8125 44.3672 2.8125 39.3047C2.8125 36.1328 3.5 33.1406 4.875 30.3281C7.09375 25.8125 10.6406 22.8281 15.5156 21.375C17.1875 20.8906 18.7109 20.6484 20.0859 20.6484C21.4609 20.6484 22.4609 20.6875 23.0859 20.7656C23.7109 20.8281 24.2812 20.9219 24.7969 21.0469C25.3125 21.1562 25.7812 21.2812 26.2031 21.4219L27.3984 21.8203C28.7578 22.2891 29.8281 22.5234 30.6094 22.5234C31.3906 22.5234 32.2578 21.8828 33.2109 20.6016H35.4375L32.3438 33.0234H30.0938Z"/>
              </svg>
              <p className='font-Poppins font-[700] text-[20px] ml-[-10px] mt-[-9px] text-[#000000] dark:text-white xl:text-[10px] xl:fpnt-[400] md:text-[16px] sm:text-[9px] '>Akalazu Victor Chichebem</p>
            </span>
            <span className='flex items-center space-x-2'>
              <svg className=' fill-black dark:fill-white h-[17px]' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2866 17.6656L18.8179 15.3218C18.5843 15.2223 18.3246 15.2013 18.078 15.262C17.8315 15.3228 17.6113 15.462 17.4507 15.6587L15.0288 18.6177C11.2279 16.8256 8.16904 13.7668 6.37695 9.96587L9.33594 7.54399C9.53305 7.38368 9.67256 7.16351 9.73335 6.91682C9.79414 6.67013 9.7729 6.41035 9.67285 6.1768L7.3291 0.708053C7.21929 0.4563 7.02508 0.250751 6.77996 0.126852C6.53483 0.00295173 6.25416 -0.0315334 5.98633 0.0293424L0.908203 1.20122C0.649985 1.26085 0.419602 1.40624 0.254656 1.61366C0.0897096 1.82109 -5.94829e-05 2.07829 2.95713e-08 2.34331C2.95713e-08 14.8677 10.1514 24.9996 22.6562 24.9996C22.9213 24.9997 23.1787 24.91 23.3862 24.7451C23.5937 24.5801 23.7392 24.3497 23.7988 24.0914L24.9707 19.0132C25.0312 18.7441 24.996 18.4623 24.8711 18.2163C24.7463 17.9704 24.5396 17.7756 24.2866 17.6656Z" />
              </svg>
              <p className=' font-Metamorphous font-[400] text-[15px] text-[#000000] dark:text-white md:text-[12px] '>+234-90-6812-9196</p>
            </span>
            <span className='flex items-center space-x-2'>
              <svg className=' fill-black dark:fill-white h-[15px] ' viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5264 6.19141C24.7168 6.04004 25 6.18164 25 6.4209V16.4062C25 17.7002 23.9502 18.75 22.6562 18.75H2.34375C1.0498 18.75 0 17.7002 0 16.4062V6.42578C0 6.18164 0.27832 6.04492 0.473633 6.19629C1.56738 7.0459 3.01758 8.125 7.99805 11.7432C9.02832 12.4951 10.7666 14.0771 12.5 14.0674C14.2432 14.082 16.0156 12.4658 17.0068 11.7432C21.9873 8.125 23.4326 7.04102 24.5264 6.19141ZM12.5 12.5C13.6328 12.5195 15.2637 11.0742 16.084 10.4785C22.5635 5.77637 23.0566 5.36621 24.5508 4.19434C24.834 3.97461 25 3.63281 25 3.27148V2.34375C25 1.0498 23.9502 0 22.6562 0H2.34375C1.0498 0 0 1.0498 0 2.34375V3.27148C0 3.63281 0.166016 3.96973 0.449219 4.19434C1.94336 5.36133 2.43652 5.77637 8.91602 10.4785C9.73633 11.0742 11.3672 12.5195 12.5 12.5Z"/>
              </svg>
              <p className='font-Metamorphous font-[400] text-[15px] text-[#000000] dark:text-white md:text-[12px] '>akalazuvictor42@gmail.com</p>
            </span>
          </div>
          <div>
            <div className='flex justify-center text-center space-x-10 mt-[79px] md:mt-[30px] sm:space-x-4'>
              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#2B33E038] rounded-[50%] dark:bg-[#FF6B6B] lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[20px] sm:h-[20px]  '>
                <svg className=' fill-black dark:fill-white h-[18px] sm:h-[10px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6894 11.25L19.7265 7.63047H13.2419V5.28164C13.2419 4.29141 14.1478 3.32617 17.052 3.32617H20V0.244531C20 0.244531 17.3248 0 14.767 0C9.42674 0 5.93611 1.73359 5.93611 4.87187V7.63047H0V11.25H5.93611V20H13.2419V11.25H18.6894Z"/>
                </svg>
              </div>
              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#2B33E038] rounded-[50%] dark:bg-[#FF6B6B] lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[20px] sm:h-[20px] '>
                <svg className=' fill-black dark:fill-white h-[18px] sm:h-[10px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9442 4.98436C17.9569 5.2031 17.9569 5.42188 17.9569 5.64062C17.9569 12.3125 13.8326 20 6.29444 20C3.97209 20 1.81473 19.1718 0 17.7344C0.329962 17.7812 0.64719 17.7969 0.989848 17.7969C2.90607 17.7969 4.67006 17 6.0787 15.6406C4.27666 15.5938 2.76649 14.1406 2.24618 12.1406C2.50001 12.1875 2.7538 12.2187 3.02032 12.2187C3.38833 12.2187 3.75638 12.1562 4.099 12.0469C2.22083 11.5781 0.812152 9.54687 0.812152 7.09374V7.03126C1.35782 7.40627 1.99239 7.64064 2.66493 7.67185C1.56087 6.76558 0.837542 5.21873 0.837542 3.46871C0.837542 2.53123 1.04055 1.67186 1.3959 0.921852C3.41369 3.98435 6.44671 5.98432 9.8477 6.2031C9.78426 5.8281 9.74617 5.43751 9.74617 5.04688C9.74617 2.2656 11.5736 0 13.8452 0C15.0254 0 16.0914 0.609373 16.8401 1.59375C17.7665 1.37501 18.6548 0.953114 19.4416 0.375003C19.137 1.5469 18.4898 2.53128 17.6396 3.15624C18.4645 3.04692 19.264 2.7656 20 2.37502C19.4417 3.37498 18.7437 4.26557 17.9442 4.98436Z"/>
                </svg>
              </div>
              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#2B33E038] rounded-[50%] dark:bg-[#FF6B6B] lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[20px] sm:h-[20px] '>
                <svg className='fill-black dark:fill-white h-[18px] sm:h-[10px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z" />
                </svg>
              </div>
              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#2B33E038] rounded-[50%] dark:bg-[#FF6B6B] lg:w-[35px] lg:h-[35px] md:w-[32px] md:-h-[32px] sm:w-[20px] sm:h-[20px] '>
                <svg className=' fill-black dark:fill-white  h-[18px] sm:h-[10px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75417 13.786C7.75417 14.8746 7.3 16.6558 6.225 16.6558C5.15 16.6558 4.69583 14.8746 4.69583 13.786C4.69583 12.6975 5.15 10.9163 6.225 10.9163C7.3 10.9163 7.75417 12.6975 7.75417 13.786ZM20 11.1559C20 12.8173 19.8667 14.5777 19.2708 16.1037C17.6917 20.0932 13.35 19.9994 10.2417 19.9994C7.08333 19.9994 2.48333 20.14 0.841667 16.1037C0.233333 14.5933 0 12.8173 0 11.1559C0 8.97369 0.579167 6.91125 1.72917 5.23943C1.5125 4.41654 1.40833 3.55198 1.40833 2.69784C1.40833 1.57808 1.6125 1.01559 2.01667 0C3.90417 0 5.1125 0.468736 6.55 1.87494C7.75833 1.51558 9 1.35413 10.2458 1.35413C11.3708 1.35413 12.5042 1.50516 13.5958 1.83328C15.0125 0.442695 16.2208 0 18.0875 0C18.4958 1.01559 18.6958 1.57808 18.6958 2.69784C18.6958 3.55198 18.5875 4.40091 18.375 5.20818C19.5208 6.89563 20 8.97369 20 11.1559ZM17.3208 13.786C17.3208 11.4997 16.2083 9.48409 14.2583 9.48409C13.4708 9.48409 12.7167 9.66117 11.925 9.79658C11.3042 9.91637 10.6833 9.96325 10.0458 9.96325C9.4125 9.96325 8.79167 9.91637 8.16667 9.79658C7.3875 9.66117 6.625 9.48409 5.83333 9.48409C3.88333 9.48409 2.77083 11.4997 2.77083 13.786C2.77083 18.3588 6.12083 19.0619 9.0375 19.0619H11.0458C13.975 19.0619 17.3208 18.364 17.3208 13.786ZM13.8792 10.9163C12.8042 10.9163 12.35 12.6975 12.35 13.786C12.35 14.8746 12.8042 16.6558 13.8792 16.6558C14.9542 16.6558 15.4083 14.8746 15.4083 13.786C15.4083 12.6975 14.9542 10.9163 13.8792 10.9163Z" />
                </svg>
              </div>
            </div>
            <p className=' font-Metamorphous font-[400] text-[17px] mr-[40px] pt-[20px] text-[#000000] dark:text-[#fff] md:text-[10px] '>
              Copyright © 2022 designed by Christian Chiemela All rights reserved.
            </p>
            <svg className='absolute right-0 bottom-0  h-[250px] md:h-[180px] sm:h-[90px]' viewBox="0 0 99 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.94 188.464C87.8155 188.918 74.9093 191.954 62.958 197.396C51.0068 202.839 40.2446 210.583 31.286 220.184C22.3273 229.786 15.3476 241.059 10.7454 253.358C6.14313 265.657 4.00849 278.743 4.46333 291.867C4.91817 304.991 7.95358 317.898 13.3963 329.849C18.8389 341.8 26.5823 352.562 36.1842 361.521C45.7861 370.48 57.0585 377.459 69.3579 382.062C81.6572 386.664 94.7426 388.798 107.867 388.344L106.62 352.363C98.2207 352.654 89.8463 351.288 81.975 348.343C74.1037 345.397 66.8896 340.93 60.7446 335.197C54.5996 329.464 49.644 322.576 46.1608 314.928C42.6776 307.279 40.735 299.019 40.4439 290.62C40.1529 282.221 41.519 273.847 44.4643 265.975C47.4096 258.104 51.8765 250.89 57.6098 244.745C63.3432 238.6 70.2307 233.644 77.8793 230.161C85.5278 226.678 93.7875 224.735 102.187 224.444L100.94 188.464Z" fill="#FF6B6B" fillOpacity="0.9"/>
                <path d="M99.1731 1.00274C86.2815 1.0024 73.5161 3.54125 61.6057 8.47433C49.6953 13.4074 38.8731 20.6381 29.7571 29.7536C20.6412 38.8691 13.4099 49.6909 8.47618 61.601C3.54247 73.5112 1.00294 86.2764 1.0026 99.168C1.00226 112.06 3.54111 124.825 8.47419 136.735C13.4073 148.646 20.638 159.468 29.7535 168.584C38.869 177.7 49.6907 184.931 61.6009 189.865C73.511 194.799 86.2763 197.338 99.1679 197.339L99.1688 161.996C90.9185 161.996 82.749 160.37 75.1268 157.213C67.5045 154.056 60.5789 149.428 54.7451 143.594C48.9114 137.76 44.2839 130.834 41.1269 123.211C37.9698 115.589 36.345 107.419 36.3452 99.169C36.3454 90.9186 37.9707 82.7491 41.1281 75.1269C44.2856 67.5047 48.9135 60.579 54.7475 54.7453C60.5815 48.9116 67.5074 44.2841 75.1298 41.127C82.7522 37.9699 90.9218 36.3451 99.1722 36.3454L99.1731 1.00274Z" fill="#FF6B6B" fillOpacity="0.9"/>
            </svg>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;