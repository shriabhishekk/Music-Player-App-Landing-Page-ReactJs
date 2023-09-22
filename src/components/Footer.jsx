import React from 'react'
import CenterMenu from './CenterMenu'

function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        <CenterMenu />
        {/* social icons */}
        
        <div className="facebook flex mt-[20px]">
            <div className={SocialStyle}>
            <img src={require("../img/facebook.png")} alt="" className='h-[40px] w-[40px]'/>
            </div>
            <div className={SocialStyle}>
            <img src={require("../img/twitter.png")} alt="" className='h-[40px] w-[40px]'/>
            </div>
            <div className={SocialStyle}>
            <img src={require("../img/email.png")} alt="" className='h-[40px] w-[40px]'/>
            </div>
     
            </div>

        {/* details */}
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  )
}

export default Footer