import React from 'react'
import Product from './Product'
import Link from 'next/link'

type Props = {
  peripheral: ComputerPeripherals[],
  headMessage: string

}

const BestProducts = ({ headMessage, peripheral}: Props) => {

  




  return (
    <div className='flex  flex-col justify-center items-center w-full mb-7 '>
       <div className=" w-full lg:w-[76%]  flex items-center  justify-start   text-orange-500 text-2xl  font-bold py-4 ">
        <h2 className='ml-3' >{headMessage}</h2>
      </div>

      <div className=" grid  md:grid-cols-3  lg:grid-cols-5 lg:grid-rows-2 m-3 gap-y-10 gap-x-5 w-fit ">
      {peripheral.map((peripheral, index) => <Link key={index} href={`/${peripheral.category}/${peripheral.id}`} >
      <Product discount={peripheral.discount} img={peripheral.img} price={peripheral.price} title={peripheral.title} key={peripheral.id} popularRank={peripheral.popularRank}/>
      </Link> )}
      </div>
    </div>
  )
}

export default BestProducts