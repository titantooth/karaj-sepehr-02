import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className='h-[250px] bg-blue-700 flex flex-row-reverse justify-between px-12 py-2'>
        <div  className='flex flex-col items-center'>
          <Image src='/logo-f.png' alt='logo footer' width={260} height={260} />
          <div className='flex flex-row flexCenter gap-6 pb-4'>

            <Link href='/'><FontAwesomeIcon className='text-white' icon={faWhatsapp} height={25} /></Link>
            <Link href='/'><FontAwesomeIcon className='text-white' icon={faTelegram} height={25} /></Link>
            <Link href='/'><FontAwesomeIcon className='text-white' icon={faGoogle} height={25} /></Link>
          </div>
          <div className='flex flex-row'>
            <FontAwesomeIcon className='text-yellow-400' icon={faStar} height={25} />
            <FontAwesomeIcon className='text-yellow-400' icon={faStar} height={25} />
            <FontAwesomeIcon className='text-yellow-400' icon={faStar} height={25} />
            <FontAwesomeIcon className='text-yellow-400' icon={faStar} height={25} />
            <FontAwesomeIcon className='text-yellow-400' icon={faStar} height={25} />

          </div>

        </div>
        <div className='w-[300px] text-right'>
          <h3 className='bold-16 py-4 text-white border-b-2 text-center'>
            آدرس
          </h3>
          <p className='py-2 text-white '>ا نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد </p>
        </div>
        <div className='w-[300px] text-right '>
          <h3 className='bold-16 py-4 text-white border-b-2 text-center'>
            لینک ها
          </h3>
          <div className='text-white flex flex-col items-center gap-2 pt-4'>

            <Link href='#home'><p>خانه</p></Link>
            <Link href='#services'><p>خدمات</p></Link>
            <Link href='#contact'><p>تماس با ما</p></Link>
          </div>
        </div>
        
      </footer>
      <div className='text-center bg-gray-90 text-white bold-16 font-sans flexCenter gap-2 items-center h-8'>
        <h1>Ali Rabiee All Rights Reserved 2024</h1>
        <Link href='/'><FontAwesomeIcon className='text-white' icon={faWhatsapp} height={16} /></Link>

      </div>
    </>
    
  )
}

export default Footer