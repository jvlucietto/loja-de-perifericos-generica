'use client'

import ProductDetails from '@/components/ProductDetails'
import React, { useEffect, useState } from 'react'

type Props = {
  params: Promise <{
    id: string
  }>
}

const page  =  ({params}: Props)  => {

  const [monitores, setMonitores] = useState<ComputerPeripherals[]>([])

  useEffect(() => {

    fetch('/api/produtos/monitores').then((res) => res.json().then((data) => setMonitores(data)))

  }, [])


  const { id } =  React.use(params)

 const filteredMonitor = monitores.filter((monitor) => String(monitor.id) === id)
  

  return (
    <div className='mt-40'>
      {
        filteredMonitor.map((monitor) => <ProductDetails key={monitor.id} img={monitor.img} price={monitor.price} title={monitor.title} discount={monitor.discount} popularRank={monitor.popularRank} sold={monitor.sold}/>)
      }
      </div>
  )
}

export default page