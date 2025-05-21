'use client'

import Image from 'next/image';
import React, { useRef } from 'react'
import { BsCartPlus } from "react-icons/bs";

type Props = {
  title: string;
  price: number;
  img: string;
  discount: number;
  popularRank?: number
}

function Product({ title, price, img, discount, popularRank }: Props) {

  

  let x = price * (discount / 100)

  let discountedPrice = Math.floor(price - x)

  

  const buyCartRef = useRef<HTMLDivElement | null> (null)

  const mouseOver = (event:React.MouseEvent) => {

    if (buyCartRef.current instanceof HTMLDivElement) {
      buyCartRef.current.style.display = 'flex';
    }
  
  }

  const mouseOut = (event:React.MouseEvent) => {
    if (buyCartRef.current instanceof HTMLDivElement) {
      buyCartRef.current.style.display = 'none';
    }
  }
  return (
    <div  onMouseOver={mouseOver} onMouseLeave={mouseOut} className=' h-fit  w-fit bg-white rounded border-1 border-neutral-200 hover:shadow-3xs cursor-pointer cart-invisible  '>

      <div className='bg-neutral-800 text-white font-bold py-1 mb-2 rounded'>
        <div className='ml-2 flex gap-1.5'>
          <p className='text-money-green'>
            {discount}%
          </p>
          OFF
        </div>
      </div>

      <div className=' relative  px-10 flex justify-center items-center '>
        <div className='relative  w-full h-[220px]  '>
          <Image src={img} alt='mouse' fill style={{ objectFit: 'contain' }} />
        </div>
        {
          popularRank && (<div className='absolute bottom-0 left-0 z-50 bg-orange-500 text-xs text-white font-semibold p-1 rounded'>{popularRank}º mais vendido</div>)
        }
      </div>
      <div className='   flex flex-col items-start justify-center m-2 font-medium w-64  '>
        <div className=' custom-elips  flex  h-[54px] w-full  overflow-hidden text-ellipsis   '>
          {title}
        </div>

        <div className= '  flex flex-col items-start justify-center w-full h-[67px] '>
          <div className='flex gap-1.5 text-neutral-600 font-extralight ' > <p className='line-through '> De: R$:{price}</p> <p>por: </p>
          </div>
          <div className='text-money-green text-lg  w-full flex justify-between  h-full  '>

          {
            discountedPrice ?
            <p className=''>
             R$ {discountedPrice} <span className='text-sm'>à vista</span> 
            </p>
           :            
            <p className=''>
             R$ {price} <span className='text-sm'>à vista</span> 
            </p>
            }
            <div id='cart' ref={buyCartRef} className=' text-2xl  p-2 bg-neutral-300 rounded-full  '>
              <button className='cursor-pointer' onClick={()=>console.log('clicaram-me')  }>

               <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Product