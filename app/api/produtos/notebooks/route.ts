import { NextResponse } from "next/server";

export async function GET() {

const notebooks = [
  { id: '1',  title: 'Notebook Ultrabook Orion X15 – Intel Core i5, 8GB RAM, Tela 15.6" Full HD LED', price: 5999, img: '/notebook-1.webp', discount: 20, popularRank: 2, sold: 5100 },
  { id: '2',  title: 'Notebook Gamer Titan Z16 – Intel Core i5, 16GB RAM, GeForce RTX 3050, SSD 512GB, Tela 16" 2K QHD, Windows 11', price: 7999, img: '/notebook-6.avif', discount: 15, popularRank: 6, sold: 984 },
  { id: '3',  title: 'Notebook Gamer Blaze 700 – Intel Core i7, 8GB RAM, RTX 3050, Desempenho para jogos e produtividade', price: 3299, img: '/notebook-4.webp', discount: 10, popularRank: 8, sold: 951 },
  { id: '4',  title: 'Notebook Gamer CoreFire 15 – Intel Core i5-12450H, 16GB RAM, RTX 2050, SSD 512GB, Tela 15.6" FHD, Windows 11', price: 4999, img: '/notebook-2.png', discount: 20, popularRank: 12, sold: 842 },
  { id: '5',  title: 'Notebook SwiftBook 5 – AMD Ryzen 7, 12GB RAM, Tela 15.6" HD, Design fino e leve', price: 2999, img: '/notebook-5.webp', discount: 25, popularRank: 18, sold: 785 },
  { id: '6',  title: 'Notebook Gamer Pulse 3X – Intel Core i7-10750H, 8GB RAM, GTX 1650, SSD 512GB, 15.6" Full HD, Windows 10', price: 2699, img: '/notebook-3.jfif', discount: 10, sold: 654 },
  { id: '7',  title: 'Notebook Gamer Nitrox 144 – Intel Core i5, Tela 15.6" IPS 144Hz, Windows 11', price: 1499, img: '/notebook-4.webp', discount: 20, sold: 652 },
  { id: '8',  title: 'Notebook Ultrafino NovaBook 14 – Intel Core Ultra 5, 16GB RAM, SSD 512GB, Tela 14", Windows 11 Home', price: 1190, img: '/notebook-1.webp', discount: 20, sold: 579 },
  { id: '9',  title: 'Notebook Gamer Storm V15 – Ryzen 7 5800H, 8GB RAM, GTX 1650, SSD 256GB, Tela 15.6" FHD, Windows 11', price: 2899, img: '/notebook-5.webp', discount: 25, sold: 498 },
  { id: '10',  title: 'Notebook Gamer CoreFire 15 – Intel Core i5-12450H, 16GB RAM, RTX 2050, SSD 512GB, Tela 15.6" FHD, Windows 11', price: 6099, img: '/notebook-6.avif', discount: 20, sold: 156 },
];

  return NextResponse.json(notebooks)
}