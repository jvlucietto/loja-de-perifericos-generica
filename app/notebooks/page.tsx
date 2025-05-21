'use client'

import Product from '@/components/Product'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}


function Notebooks({ }: Props) {

  const [notebooks, setNotebooks] = useState<ComputerPeripherals[]>([])

  useEffect(() => {

    fetch('/api/produtos/notebooks').then((res) => res.json().then((data) => setNotebooks(data)))

  }, [])


  return (
    <div>
      <div className=' w-max grid grid-cols-5 mt-25 gap-y-10 gap-x-5 '>
        {
         notebooks.map((product) =>
            <div key={product.id}>
              <Link href={`/notebooks/${product.id}`} >
                <Product  title={product.title} price={product.price} img={product.img} discount={product.discount} popularRank={product.popularRank} /> 
              </Link>
            </div>
          )
    }
      </div>
    </div>
  )
}

export default Notebooks