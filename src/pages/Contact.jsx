import React from 'react'

const contactpic = require("./contact-pic.jpg");

function Contact() {
  return (
    <div className='mt-28 font-josefin flex flex-col lg:flex-row mx-5 mb-8 items-center'>
        <div className='flex flex-col items-center px-12 box-border max-w-xl'>
            <h2 className='font-bold text-xl mb-3'>Say Hello!</h2>
            <img className='rounded-xl' src={contactpic} alt='Contact-Munchies' />
        </div>
        <div className='mt-5 px-5 max-w-md '>
            <div className='mt-3 font-semibold mb-32  '>
                Have a suggestion? Reach out to us via <span className='underline text-red-400'> <a href="mailto:uchennanjoku411@gmail.com"> email</a></span> or contact our founder on <span className='underline text-red-400'> <a href="https://www.linkedin.com/in/uchenna-njoku-874259235/"> LinkedIn!</a></span>
            </div>
        </div>
    </div>
)
}

export default Contact
