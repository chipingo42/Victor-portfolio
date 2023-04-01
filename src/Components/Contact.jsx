import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../Components/Navbar'
import Footer from './Footer'



const Contact = () => {

  const { register, trigger, formState: { errors } } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  
  const input = `block mb-7 w-full py-4 bg-gray-100 my-4 dark:bg-gray-900 outline-none pl-5 border-none dark:text-white`;
  const label = `font-Metamorphous font-light text-black dark:text-white relative top-2`;

  return (
    <>
     <Navbar />
      <div className='gap-16 bg-[#E5E5E5] dark:bg-[#151D3B] py-10 md:min-h-screen md:pb-0 w-full overflow-x-hidden max-md:min-h-screen'>
        <span className=' relative top-[40px]'>
          <svg className='h-[250px] max-md:h-[180px]' viewBox="0 0 96 390" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-5.04033 203.387C8.08377 202.926 20.9885 199.885 32.9372 194.437C44.8858 188.988 55.6444 181.24 64.5985 171.634C73.5527 162.028 80.527 150.752 85.1235 138.45C89.7199 126.149 91.8484 113.062 91.3874 99.9384C90.9263 86.8143 87.8848 73.9095 82.4365 61.9608C76.9882 50.0122 69.2398 39.2537 59.6337 30.2995C50.0276 21.3454 38.7518 14.371 26.4503 9.77454C14.1488 5.1781 1.06244 3.04963 -12.0617 3.51066L-10.7977 39.4907C-2.39861 39.1956 5.97639 40.5578 13.8491 43.4994C21.7218 46.441 28.938 50.9045 35.0857 56.635C41.2334 62.3654 46.1922 69.2506 49.679 76.8975C53.1658 84.5444 55.1123 92.8031 55.4073 101.202C55.7024 109.601 54.3402 117.976 51.3986 125.849C48.457 133.722 43.9935 140.938 38.2631 147.086C32.5326 153.233 25.6474 158.192 18.0005 161.679C10.3537 165.166 2.09489 167.112 -6.30424 167.407L-5.04033 203.387Z" fill="#FF6B6B" fillOpacity="0.9"/>
            <path d="M-2.91184 389.212C9.97975 389.207 22.744 386.662 34.6521 381.723C46.5601 376.784 57.3789 369.549 66.4906 360.429C75.6022 351.309 82.8284 340.484 87.7565 328.571C92.6846 316.659 95.2181 303.892 95.2124 291.001C95.2066 278.109 92.6618 265.345 87.7231 253.437C82.7844 241.529 75.5486 230.71 66.4288 221.598C57.309 212.487 46.4838 205.261 34.5714 200.332C22.6589 195.404 9.8924 192.871 -2.9992 192.877L-2.98347 228.219C5.26686 228.216 13.4371 229.837 21.0609 232.991C28.6846 236.145 35.6124 240.769 41.4489 246.601C47.2854 252.432 51.9161 259.356 55.0768 266.976C58.2374 274.597 59.8661 282.766 59.8698 291.016C59.8734 299.267 58.252 307.437 55.0982 315.061C51.9443 322.685 47.3197 329.612 41.4884 335.449C35.6572 341.285 28.7334 345.916 21.1125 349.077C13.4916 352.237 5.32277 353.866 -2.92756 353.87L-2.91184 389.212Z" fill="#FF6B6B" fillOpacity="0.9"/>
          </svg>
        </span>
        <div className='md:flex flex-col justify-center w-4/6 mx-auto mb-20 max-xs:w-4/5 '>
          <h1 className='font-Metamorphous font-normal text-[40px] text-[#000000] dark:text-white max-md:text-[20px] max-xs:text-[27px]'>Hello Recruiter,</h1>
          <p className='font-Metamorphous font-normal text-[20px] dark:text-[#fff] mt-[30px]  max-sm:text-[18px]  '>If you are here I strongly believe we will be working closely or together as team soon. Keep scrolling let me talk you through my journey so far.</p>
          <div className='mt-[90px]'>
            <h1 className=' font-Metamorphous font-extralight rounded-md text-[40px] text-black dark:text-white'>Hire me</h1>
            <div className='md:w-full py-10 bg-white dark:bg-[#172450] mt-[12px] px-14 max-xs:px-5'>
              <h1 className=' font-Metamorphous font-normal text-[20px] text-black dark:text-white'>Dear <span className=' text-red-300 dark:text-red-500'>Recruiter</span>,</h1>
              <p className=' font-Metamorphous font-light text-[18px] text-black dark:text-white mt-5'>Please fill the form, will respones withIn 24 hours.</p>
              <form className='mt-7'
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/11bbfe2994357cad413dba4411ebb2f6"
                method="POST"
              >
                <div>
                  <label htmlFor="Recruiter" className={label}>Recruiter's Name</label>
                  <input
                    type="text"
                    id='Recruiter' 
                    className={input}
                    {...register("name", {
                      required: true, 
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                  <p className="-mt-5 text-[11px] text-red-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 100 chara."}
                  </p>
                )}
                </div>
                <div>
                  <label htmlFor="Company" className={label}>Company's Name</label>
                  <input 
                   type="text"
                   id='Company'
                    className={input} 
                    {...register("name", {
                      required: true, 
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className="-mt-5 text-[11px] text-red-500">
                      {errors.name.type === "required" && "This field is required."}
                      {errors.name.type === "maxLength" && "Max length is 100 chara."}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={label}>Email Address</label>
                  <input 
                    type="text" 
                    id='email' 
                    className={input}
                    {...register("email", {
                      required: true, 
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="-mt-5 text-[11px] text-red-500">
                      {errors.email.type === "required" && "This field is required."}
                      {errors.email.type === "pattern" && "invalid email address"}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="text" className={label}>Description</label>
                  <textarea  
                    id="text" cols="30" rows="5" 
                    className={input}
                    {...register("message", {
                      required: true, 
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className="-mt-5 text-[11px] text-red-500">
                      {errors.message.type === "required" && "This field is required."}
                      {errors.message.type === "maxLength" && "Max length is 2000 chara."}
                    </p>
                  )}
                </div>
                <button type="submit" className={`${input} bg-red-300 text-white dark:bg-blue-900`} >Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;