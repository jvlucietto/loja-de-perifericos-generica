import { NextResponse } from "next/server";

const mouses = [
  { id: 1, title: 'Mouse Gamer Wireless 4K – 26000 DPI, Sensor Óptico Avançado, 5 Botões, Preto', price: 800, img: '/mouse-1.webp', discount: 40, popularRank: 4, sold: 1556 },
  { id: 2,  title: 'Mouse Gamer Wireless Leve – 25400 DPI, 6 Botões, Branco, Alta Performance', price: 1100, img: '/mouse-4.jpg', discount: 35, popularRank: 6, sold: 744 },
  { id: 3,  title: 'Mouse Sem Fio Compacto – 1000 DPI, Rosa, Alimentado por Pilha', price: 80, img: '/mouse-6.jpg', discount: 20, popularRank: 7, sold: 623 },
  { id: 4,  title: 'Mouse Gamer com Iluminação RGB – 6 Botões Programáveis, 8500 DPI, Preto', price: 900, img: '/mouse-2.jpg', discount: 10, popularRank: 20, sold: 423 },
  { id: 5,  title: 'Mouse Gamer Wireless Rosa – Ultra Leve (60g), 25000 DPI, Design Ergonômico', price: 1300, img: '/mouse-5.jpg', discount: 45, sold: 224 },
  { id: 6,  title: 'Mouse Gamer Sem Fio – Ultra Leve (60g), 6300 DPI, Design Minimalista', price: 500, img: '/mouse-1.webp', discount: 30, sold: 134 },
  { id: 7,  title: 'Mouse Gamer Avançado – Wireless/Bluetooth, Sensor de Alta Precisão, 26000 DPI, Preto', price: 700, img: '/mouse-7.jpg', discount: 25, sold: 122 },
  { id: 8,  title: 'Mouse Gamer Wireless Branco – 25400 DPI, 6 Botões, Performance Profissional', price: 1000, img: '/mouse-4.jpg', discount: 60, sold: 200 },
  { id: 9,  title: 'Mouse Gamer RGB – 6 Botões, 52000 DPI, Design Preto com Iluminação Dinâmica', price: 200, img: '/mouse-3.jpg', discount: 10, sold: 133 },
  { id: 10, title: 'Mouse Gamer Branco – Wireless, 25400 DPI, 6 Botões, Design Leve', price: 999, img: '/mouse-4.jpg', discount: 5, sold: 45 },
  { id: 11, title: 'Mouse Sem Fio Compacto – Rosa, 1000 DPI, Alimentado por Pilha', price: 90, img: '/mouse-6.jpg', discount: 48, sold: 98 },
  { id: 12, title: 'Mouse Gamer RGB – 6 Botões, 52000 DPI, Preto, Edição Avançada', price: 1500, img: '/mouse-3.jpg', discount: 66, sold: 320 },
  { id: 13, title: 'Mouse Gamer Rosa – Ultra Leve (60g), Wireless, 25000 DPI, Ergonômico', price: 78, img: '/mouse-5.jpg', discount: 20, sold: 121 },
  { id: 14, title: 'Mouse Sem Fio Rosa – Compacto, 1000 DPI, Prático e Leve', price: 120, img: '/mouse-6.jpg', discount: 40, sold: 68 },
  { id: 15, title: 'Mouse Gamer Wireless Branco – 25400 DPI, 6 Botões, Ultra Leve', price: 300, img: '/mouse-4.jpg', discount: 35, sold: 88 },
  { id: 16, title: 'Mouse Gamer Pro – Wireless/Bluetooth, Sensor de Alta Precisão, 26000 DPI, Preto', price: 1600, img: '/mouse-7.jpg', discount: 30, sold: 112 },
  { id: 17, title: 'Mouse Gamer com Iluminação RGB – 6 Botões Programáveis, 8500 DPI, Preto', price: 800, img: '/mouse-2.jpg', discount: 40, sold: 13 },
  { id: 18, title: 'Mouse Gamer Wireless 4K – 26000 DPI, Sensor Óptico Avançado, 5 Botões, Preto', price: 500, img: '/mouse-1.webp', discount: 40, sold: 345 },
];


export async function GET() {


  return NextResponse.json(mouses)

}

export async function POST(req: Request) {

  try {
    const body = await req.json()


    const newMouse = {
      id: String(mouses.length + 1), ...body
    }

    mouses.push(newMouse)

    return NextResponse.json(newMouse, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "erro ao adicionar o mouse" }, { status: 500 })
  }

}