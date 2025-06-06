import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
          <div className="relative h-25 md:h-50  lg:w-full lg:h-100  flex items-start justify-start bg-background-dark-blue">
        <Image alt="" src={'/banner-loja.png'}  fill style={{ objectFit: 'contain' }} ></Image>
      </div>
  )
}

export default Banner