import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
          <div className="relative  w-[100%] h-[300px]  flex items-start justify-start bg-background-dark-blue">
        <Image alt="" src={'/banner-loja.png'}  fill style={{ objectFit: 'contain' }} ></Image>
      </div>
  )
}

export default Banner