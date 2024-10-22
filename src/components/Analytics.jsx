import React from 'react'
import Laptop from '../assests/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className='flex flex-col justify-center '>
            <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard </p>
            <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In natus fugit, deleniti eos praesentium, delectus tempore exercitationem a, dolorum quasi hic sit distinctio assumenda impedit perspiciatis eligendi dolores commodi voluptas?</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md py-2  my-6 mx-auto text-black font-bold md:mx-0'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics