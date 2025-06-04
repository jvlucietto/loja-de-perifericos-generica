
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { NavBarLinks } from '@/public/constants'

type Props = {}

const Navbar = (props: Props) => {



  return (
    <nav className='flex-col flex items-center h-26  pt-2  bg-neutral-800 text-white  fixed top-0 left-0 z-100 w-full' >
      <div className='flex justify-center items-center gap-6   '>
        <Link href={'/'} >
          <h1 className='font-bold text-2xl  ' >Loja de PC</h1>
        </Link>
        <SearchBar />
        {/* <div>
          Login
        </div> */}
      </div>
      <div>
        <ul className='flex justify-between w-fit  gap-25 text-2xl  '>
          {NavBarLinks.map((item) => <Link href={item.route} key={item.name} ><li className='flex items-center justify-center '>{item.name}</li></Link>)}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar