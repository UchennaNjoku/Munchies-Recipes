import React from 'react'

const storypic = require("./about-pic.jpg");

function About() {
  return (
    <div className='mt-28 font-josefin flex flex-col lg:flex-row mx-5 mb-8 items-center'>
            <div className='flex flex-col items-center px-12 box-border max-w-xl'>
                <h2 className='font-bold text-xl mb-3'>Our Story</h2>
                <img className='rounded-xl' src={storypic} alt='About-Munchies' />
            </div>
            <div className='mt-5 px-5 max-w-md '>
                <div className='mt-3 font-semibold mb-32  '>
                  A personal project of Uchenna Njoku, Munchies Recipes represents the "everyone included" philosophy. At Munchies we know 
                  that no matter where you are or who you are food is an important part of what makes you uniquely you. What better way to find yourself than through our plethora of delicious food from all around the world!
                </div>
                <hr className='font-bold'/>
                <div className=''>
                  enjoy food from all around the world. AT YOUR FINGERTIPS
                </div>
            </div>
        </div>
  )
}

export default About
