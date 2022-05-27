import React from 'react';
import { FaChevronDown } from 'react-icons/fa'

const image1 = require('./foodinpan.png');

function Header() {
  return (
    <div className='relative lg:static h-auto pt-24'>
      <section className='text-white font-josefin bg-greenlanding h-auto flex flex-col relative w-screen'>
        <div className=" tracking-tight mt-32 md:mt-40 lg:mt-44 text-white text-special  md:text-special3 lg:text-special4 font-bold uppercase ml-8 md:ml-10">
          Food at <br className='md:hidden'/> your <br/><span className='text-orangelanding'>fingertips</span>
        </div>
        <div className=" mt-10 md:mt-20 lg:mt-32 mb-5 text-special2 italic flex flex-col self-start items-start ml-8 md:ml-10">
           <p>need a random recipe?<br/>look no further. </p>
          <div className=" ml-10">
            <FaChevronDown className=''/>
          </div>
        </div>
      </section>
      <div>
          <img className='absolute scale-125 md:scale-100 lg:scale-y-95 ml-44 md:ml-44 lg:ml-56 top-12 md:top-0 lg:top-0' src={image1} alt="header"/>
      </div>
    </div>
  )
}

export default Header

