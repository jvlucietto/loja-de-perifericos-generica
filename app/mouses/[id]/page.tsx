'use client'

import ProductDetails from '@/components/ProductDetails'
import React, { useEffect, useState } from 'react'


type Props = {
  params: Promise<{
    id: string
  }>
}

const page  = ({params}: Props)  => {

  const [mouses, setMouses] = useState<ComputerPeripherals[]>([])

  useEffect(() => {

    fetch('/api/produtos/mouses').then((res) => res.json().then((data) => setMouses(data)))

  },[])

  const { id } = React.use(params)

 const filteredMouse = mouses.filter((mouse) =>  String(mouse.id) === id)
  

  return (
    <div className='mt-40'>
      {
        filteredMouse.map((mouse) => <ProductDetails key={mouse.id} img={mouse.img} price={mouse.price} title={mouse.title} discount={mouse.discount} popularRank={mouse.popularRank} sold={mouse.sold}/>)
      }
      </div>
  )
}

export default page