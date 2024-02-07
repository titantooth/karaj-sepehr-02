import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='mt-20 bg-gradient-to-b from-white to-blue-700'>
        <div className='max-container flex flexCenter'>
            <div className='flex-1 h-[500px] flex flex-col flexCenter gap-3'>
                <h1 className='bold-32 py-4 text-blue-950'>اطلاعات تماس</h1>

                <div className='bg-white rounded-xl w-[70%] h-[70%]'>
                </div>
            </div>
            <div className='flex-1  h-[500px] overflow-hidden'>
                <Image src='/contact.png' alt='contact us' height={600} width={600} />
            </div>

        </div>
    </section>
  )
}

export default Contact