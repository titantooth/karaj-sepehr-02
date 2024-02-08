import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section>
        <div className='overflow-x-hidden'>
            <div className='flexCenter py-12 gap-6 '>
                <div className='pb-24 flex flex-col gap-6'>

                    <Image className='rounded-full' src='/ita.jpg' alt='italy flag' width={200} height={200} />
                    <Image className='rounded-full' src='/ger.png' alt='italy flag' width={200} height={200} />
                </div>
                <div className='flex flex-col gap-6'>

                    <Image className='rounded-full' src='/fra.webp' alt='italy flag' width={200} height={200} />
                    <Image className='rounded-full' src='/tur.webp' alt='italy flag' width={200} height={200} />
                </div>
                <div>

                    <h1 className='text-right bold-32 text-blue-950 py-6 ml-[120px]'>
                        ترجمه مدارک شما<br/> به تمامی زبان‌های رایج
                    </h1>
                    <p className='py-4 text-right'>
                        با آسایش خاطر تمامی مدارک خود را به تمامی  زبان‌هایی که مدنظرتان<br/> هستند ترجمه کنید
                    </p>
                </div>
            </div>
            <Image className='absolute top-[1400px] -right-24' src='/features.png' alt='features' width={600} height={600} />
        </div>
    </section>
  )
}

export default Features