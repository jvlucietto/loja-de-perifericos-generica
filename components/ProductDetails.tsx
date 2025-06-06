import Image from 'next/image';
import React from 'react'

type Props = {
  title: string;
  price: number;
  img: string;
  discount: number;
  popularRank?: number;
  sold: number;
}

const ProductDetails = ({ title, price, img, discount, popularRank, sold }: Props) => {



  let x = price * (discount / 100)

  let discountedPrice = Math.floor(price - x)

  return (
    <div>
      <div className=' border-1 w-fit h-fit p-10 bg-white border-neutral-200 flex gap-3 lg:gap-0 lg:flex-row flex-col items-center lg:items-start justify-center ' >

        <div className='  w-40 lg:w-[600px]'>
          <Image height={30} width={810} alt='' src={img}></Image>
        </div>

        <div className= '   w-70 lg:w-[640px]  text-white border-red-500 bg-neutral-700 pb-10 lg:pb-0 lg:h-[810px] rounded '>
          
      <div className='flex flex-col gap-4 m-2' >

          <div  className='  border-b-emerald-500 p-3 lg:text-lg'>
            {title}
          </div>
        <div className='flex items-center justify-center h-fit gap-6 text-orange-500 text-xl lg:text-2xl font-bold ' >

        <div className=' flex flex-col items-center justify-center h-15 w-40 ' >
          <p>DESCONTO</p>
          {discount}%
        </div>

      <div className=' flex flex-col items-center justify-center h-15 w-40' >
        <p>VENDIDOS</p>
        {sold}
      </div>
        </div>
   
          <div className=' border-b-emerald-500 p-3'>
          <div className='flex gap-1.5 text-white text-sm'  > <p className='line-through '> De: R$:{price}</p> <p>por: </p>
          </div>
          <p className=' text-xl lg:text-4xl text-light-money-green font-bold'>
              R$ {discountedPrice} 
            </p>           
          </div>

          <div className='flex items-center justify-center lg:text-lg font-bold '>
            <button className='bg-light-money-green w-11/12 h-12 rounded cursor-pointer transition delay-75 duration-300 ease hover:bg-money-green  0.4s ' >COMPRAR COM DESCONTO</button>
            </div>
      </div>
        </div> 

      </div>
    </div>
  )
}

export default ProductDetails