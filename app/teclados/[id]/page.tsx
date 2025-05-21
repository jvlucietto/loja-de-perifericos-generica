'use client'

import ProductDetails from '@/components/ProductDetails'

import React, { useEffect, useState } from 'react'


type Props = {
  params: Promise <{
    id: string
  }>
}


const page  =  ({params}: Props)  => {

  const [keyboard, setKeyboard] = useState<ComputerPeripherals[]>([])

  useEffect(() => {


    fetch('/api/produtos/teclados').then((res) => res.json().then((data) => setKeyboard(data)))

  },[])


  const { id } =  React.use(params)

 const filteredKeyBoard = keyboard.filter((keyboard) => String(keyboard.id) === id)
  

  return (
    <div className='mt-40'>
    {
      filteredKeyBoard.map((keyboard) => <ProductDetails key={keyboard.id} img={keyboard.img} price={keyboard.price} 
      title={keyboard.title} discount={keyboard.discount} popularRank={keyboard.popularRank} sold={keyboard.sold} />)
    }
    </div>
  )
}

export default page