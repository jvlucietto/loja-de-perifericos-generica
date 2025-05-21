'use client'

import Product from '@/components/Product';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {

 params: Promise<{
  title: string;
 }>

}

const page = ({params} : Props) => {

  const [all, setAll] = useState<ComputerPeripherals[]>([])

  const {title} = React.use(params)

 const decodedTitle =  decodeURIComponent(title)
  

  useEffect(()=> {
    
    fetch('/api/produtos/allProducts').then((data) => data.json().then((data => setAll(data) )))

    

  },[])

  const filterdProducts = all.filter((product) => product.title.toLowerCase().includes(decodedTitle.toLowerCase()) )


  console.log(filterdProducts)

  return (
    <div>

      <div>
        <h1>RESULTADOS DA BUSCA POR {decodedTitle.toUpperCase()}</h1>
      </div>
      {
       filterdProducts.length === 1 ?
      <div>



    <div className='w-max grid grid-cols-5 mt-25 gap-y-10 gap-x-5'>
{
  filterdProducts.map((product, index) => <Link key={index} href={product.category}>

    <Product discount={product.discount} img={product.img} price={product.price} title={product.title} popularRank={product.popularRank} />

  </Link> )
}
      
    </div>
    </div>
      :
      <div>
        <h1>Nenhum produto encontrado</h1>
      </div>

      }

    </div>
  )
}

export default page