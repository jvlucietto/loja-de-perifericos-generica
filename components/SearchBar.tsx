'use client'

import { tree } from 'next/dist/build/templates/app-page'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React, { HTMLInputTypeAttribute, useRef, useState } from 'react'

type Props = {}

const SearchBar = (props: Props) => {

  const router = useRouter()

  const [isInputActive, setIsInputActive] = useState(false)
  const [itemSearch, setItemSearch] = useState<string>('')
  const [allProducts, setAllProducts] = useState<ComputerPeripherals[]>([])
  const [userSearch, setUserSearch] = useState<ComputerPeripherals[]>([])

  const input = useRef<HTMLInputElement>(null);



  const handleFocus = () => {

    setIsInputActive(true)
  }
  const handleUnfocus = () => {

    setTimeout(() => {
      setIsInputActive(false)
      input.current!.value = ''
    }, 100)

    


  }


  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

    setItemSearch(e.target.value)

    fetch('/api/produtos/allProducts').then((data => data.json().then((data) => setAllProducts(data))))

    const userProduct = allProducts.filter((product) => {

      const lowerCasedUserSearch = itemSearch.toLowerCase().trim()

      return product.title.toLowerCase().includes(lowerCasedUserSearch)


    })

    setUserSearch(userProduct)

  }


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    router.push(`/busca/${itemSearch}`)


    setIsInputActive(false)
    input.current!.value = ''




  }

  return (
    <div className='relative flex flex-col gap-3'>
      <form onSubmit={handleSubmit}>
        <input ref={input} onChange={handleChange} onFocus={handleFocus} onBlur={handleUnfocus} className='bg-white text-black w-220 h-10 p-6 rounded ' type="text" placeholder='Pesquise o seu produto' />
        <div className='flex mb-3 '>
          {isInputActive && <div className='bg-white h-fit  max-h-95 w-full absolute overflow-x-scroll   '>
            {userSearch.map((product, index) =>
              <Link href={`/${product.category}/${product.id}`} key={index}>
                <div className='text-black  flex items-start justify-start gap-3 p-2 m-2  border-b-1 border-neutral-500  ' >
                  <div className='p-3 relative h-25 w-50 flex items-center justify-center '>
                    <Image className='' alt='' src={product.img} fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className='flex flex-col text-zinc-600  h-full w-full gap-0.5 ' >
                    <p className='hover:text-black' >
                      {product.title}
                    </p>
                    <p className='text-money-green'>
                      R$:{product.price}
                    </p>
                    <p className='text-money-green'>
                      {product.discount}% OFF
                    </p>
                  </div>

                </div>
              </Link>
            )}

          </div>

          }

        </div>
      </form>
    </div>
  )
}

export default SearchBar