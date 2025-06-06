'use client'

import BestProducts from "@/components/BestProducts";
import Product from "@/components/Product";
import { useEffect, useState } from "react";

export default function Home() {

  const [allProducts, setAllproducts] = useState<ComputerPeripherals[]>([])


  useEffect(() => {

    fetch('/api/produtos/allProducts').then((data) => data.json().then((data) => setAllproducts(data)))

  }, [])


  const highestDiscounts = allProducts.sort((a, b) => b.discount - a.discount).filter((product) => product.discount >= 30).slice(0, 10)

  const mostSold = allProducts.sort((a, b) => b.sold - a.sold).filter((product) => product.sold >= 100).slice(0, 10)

  const cheapestProducts = allProducts.sort((a, b) =>   a.price - b.price).filter((product) => product.price >= 100).slice(0, 10)



  return (

    <div className="  lg:flex items-start flex-col  mt-25 w-full ">
      <BestProducts headMessage='SUPER DESCONTOS!!!' peripheral={highestDiscounts} />
      <BestProducts headMessage='MAIS VENDIDOS?!' peripheral={mostSold} />
      <BestProducts headMessage='MENOR PREÇO' peripheral={cheapestProducts} />
      

    </div>
  );
}
