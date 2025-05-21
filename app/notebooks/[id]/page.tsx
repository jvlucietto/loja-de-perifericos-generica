'use client'


import ProductDetails from '@/components/ProductDetails'
import React, { useEffect, useState } from 'react'

type Props = {
  params: Promise<{
    id: string
  }>
}



const page = ({ params }: Props) => {

  const [notebooks, setNotebooks] = useState<ComputerPeripherals[]>([])

  useEffect(() => {

    fetch('/api/produtos/notebooks').then((res) => res.json().then((data) => setNotebooks(data)))
  
  }, [])

  const { id } = React.use(params)

  const filteredNote = notebooks.filter((note) => String(note.id) === id)

  useEffect


  return (
    <div className='mt-40'>
      {
        filteredNote.map((note) => <ProductDetails key={note.id} img={note.img} price={note.price} title={note.title} discount={note.discount} popularRank={note.popularRank} sold={note.sold} />)
      }
    </div>
  )
}

export default page