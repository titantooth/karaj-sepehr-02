import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from "@/components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
        <div className='flexBetween gap-3 px-10'>
            <div className='flex btn_dark_green font-yekan cursor-pointer rounded-5xl items-center gap-2 hover:gap-3 [&>*:first-child]:hover:text-black'>
                <FontAwesomeIcon className='text-white' icon={faPhone} height={15} />

                <Button 
                text='۰۹۳۰۴۷۳۹۰۴۷'
                />

            </div>

            <div>
                <ul className='flex gap-10 flex-row-reverse font-yekan '>
                    {NAV_LINKS.map((link) => (
                       <li className='active:text-black hover:text-yellow-50 duration-300' key={link.key}><Link href={link.href} >{link.label}</Link></li> 
                    ))}
                </ul>
            </div>
            <div>
                <Link href='/'>
                    <Image src='/logo.png' alt='logo' height={30} width={250} />
                </Link>
            </div>
           
            
        </div>
    </nav>
  )
}

export default Navbar