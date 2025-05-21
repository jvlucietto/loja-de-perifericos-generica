'use client'

import Product from '@/components/Product'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}



function Teclados({}: Props) {

  const [teclados, setTeclados] = useState<ComputerPeripherals[]>([])

  useEffect(() => {
    fetch('/api/produtos/teclados').then((res) => res.json().then((data) => setTeclados(data)))
  },[])

  return (


    <div>
          <div className=' w-max grid grid-cols-5 mt-25 gap-y-10 gap-x-5 '>
     {
      teclados.map((product) => 
        <div key={product.id}>
              <Link href={`/teclados/${product.id}`} >
      <Product key={product.id} title={product.title} price={product.price} img={product.img} discount={product.discount} popularRank={product.popularRank}  /> 
      </Link>
      </div>
      )
     
     } 
    </div>
    </div>
  )
}

export default Teclados