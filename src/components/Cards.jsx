import React from 'react'
import Single from "../assests/single.png";
import Double from "../assests/double.png";
import Triple from "../assests/triple.png";


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl rounded-2xl flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-9'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div> 
                    <button className='bg-[#00df9a] w-[200px] rounded-md py-2 my-6 mx-auto text-black font-bold'>Start Trial</button>          
            </div>
            <div className='w-full bg-gray-100 shadow-xl rounded-2xl flex flex-col p-4 my-8 md:my-0 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Two User</h2>
                <p className='text-center text-4xl font-bold'>$179</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-9'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div> 
                    <button className='bg-[#00df9a] w-[200px] rounded-md py-2  my-6 mx-auto text-black font-bold'>Start Trial</button>          
            </div>
            <div className='w-full shadow-xl rounded-2xl flex flex-col p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Family Plan</h2>
                <p className='text-center text-4xl font-bold'>$209</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-9'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 3 GB</p>
                    </div> 
                    <button className='bg-[#00df9a] w-[200px] rounded-md py-2  my-6 mx-auto text-black font-bold'>Start Trial</button>          
            </div>
        </div>

    </div>
  )
}

export default Cards