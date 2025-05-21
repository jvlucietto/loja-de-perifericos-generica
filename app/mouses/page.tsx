"use client"

import Product from '@/components/Product'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}



const Mouses = (props: Props) => {

  const [mouses, setMouses] = useState<ComputerPeripherals[]>([])

  useEffect(()=>{
    fetch('/api/produtos/mouses').then((res) => res.json().then((data) => setMouses(data)))
  },[])


 

  return (
    <div className=' w-max grid grid-cols-5 mt-25 gap-y-10 gap-x-5  '>
     
   
       {
        
         mouses.map((product) => 
         <div key={product.id}>
          <Link href={`/mouses/${product.id}`}>
         <Product  title={product.title} price={product.price} 
         img={product.img} discount={product.discount} popularRank={product.popularRank}/> 
         </Link>
        
         </div>
        )
       }

      
    </div>
  )
}

export default Mouses