import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
        <div className=''>
          <Image className='absolute top-40 -left-20 z-10' src='/ghazaee.png' alt='logo' width={600} height={600} ></Image>
        </div>
        <div>
            <Image className='absolute -right-10' src='/hero-bg.png' alt='blue art' height={900} width={900} />

            <div className=' max-w-[600px]  absolute top-80 right-20'>
                <h1 className='min-h-[110px] text-white regular-64'>دفتر ترجمه رسمی سپهر</h1>
                <p className='min-h-[400px] text-right text-white'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
        </div>

    </section>
    
  )
}

export default Hero