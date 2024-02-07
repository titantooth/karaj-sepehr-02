import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBank, faBalanceScale,  } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Products = () => {
  return (
    <section className='relative mt-[620px] flexCenter flex flex-col '>
        <h1 className='text-center bold-40 py-5'>
            خدمات ما
        </h1>
        <p className='text-center regular-14 py-4 max-w-[800px] '>
        علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
        </p>
        <div  className='flex justify-evenly gap-20 bg-blue-600 py-10 px-30 w-[900px] rounded-full text-blue-950'>
            
            <Link href='/'>
                <div className='bg-white px-12 py-8 rounded-full flex-col flex gap-2 hover:animate-pulse cursor-pointer hover:bg-yellow-50 duration-300  '>
                    <FontAwesomeIcon className='text-blue-950' icon={faBank} height={15} />
                    <h2>مدارک بانکی</h2>
                </div>
            </Link>
            <Link href='/'>
                <div className='bg-white px-12 py-8 rounded-full flex-col flex gap-2 hover:animate-pulse cursor-pointer hover:bg-yellow-50 duration-300  '>
                    <FontAwesomeIcon className='text-blue-950' icon={faAddressCard} height={15} />
                    <h2>مدارک شناسایی</h2>
                </div>
            </Link>
            <Link href='/'>
                <div className='bg-white px-12 py-8 rounded-full flex-col flex gap-2 hover:animate-pulse cursor-pointer hover:bg-yellow-50 duration-300  '>
                    <FontAwesomeIcon className='text-blue-950' icon={faBalanceScale} height={15} />
                    <h2>مدارک قضائی</h2>
                </div>
            </Link>

        </div>

    </section>
  )
}

export default Products