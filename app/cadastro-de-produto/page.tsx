'use client'

import React, { useState } from 'react'

type Props = {}

function page({ }: Props) {

  const [title, setTitle] = useState<string>()
  const [price, setPrice] = useState<number>()


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    const newMouse = {
      title,
      price
    }

    const res = await fetch('/api/produtos/mouses', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMouse)
    })

    console.log(typeof price)

  }

  return (
    <div className='h-screen w-screen flex items-center justify-center mt-10 '>
      <div className='bg-neutral-700 h-4/6 w-2/5 '>


        <form onSubmit={handleSubmit} className='flex flex-col h-full items-center justify-start mt-20'>
          <div className='text-white border-2 border-blue-300 flex flex-col gap-2  p-2 ' >
            <p>Nome do produto</p>
            <input onChange={(e) => setTitle(e.target.value)} className='w-50 bg-white text-black ' type="text" placeholder='digite o nome do produto...' />
          </div>
          <div className='text-white border-2 border-blue-300 flex flex-col gap-2  p-2'>
            <p>preço do produto</p>
            <input onChange={(e) => setPrice(Number(e.target.value))} className='w-50 bg-white text-black ' type="number" placeholder='digite o preço do produto...' />
          </div>


        </form>
      </div>
    </div>
  )
}

export default page