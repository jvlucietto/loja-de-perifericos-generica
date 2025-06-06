
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { NavBarLinks } from '@/public/constants'

type Props = {}

const Navbar = (props: Props) => {



  return (
    <nav className=' flex-col flex items-start lg:items-center lg:h-28   pt-2  bg-neutral-800 text-white  fixed top-0 left-0 z-50 lg:w-full ' >
      <div className=' flex flex-col  gap-4 lg:flex-row lg:m-0 lg:justify-center lg:items-center lg:gap-6   '>
        <Link href={'/'} >
          <h1 className='font-bold text-2xl ml-3 ' >Loja de PC</h1>
        </Link>
        <SearchBar />
        {/* <div>
          Login
        </div> */}
      </div> 
       <ul className='hidden lg:flex justify-between lg:w-fit  lg:gap-20 text-2xl  '>
          {NavBarLinks.map((item) => <Link href={item.route} key={item.name} ><li className='flex items-center justify-center '>{item.name}</li></Link>)}
        </ul>

    </nav>
  )
}

export default Navbar