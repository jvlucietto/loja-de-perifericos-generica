import { NextResponse } from "next/server";

export async function GET() {

const monitores = [
  { id: '1', title: 'Monitor Gamer 24" Full HD – IPS, 180Hz, 0,5ms, HDMI/DP, Antirreflexo, Altura Ajustável, Preto', price: 100, img: '/monitor-1.jpg', discount: 10, popularRank: 4, sold: 1237 },
  { id: '2', title: 'Monitor Gamer 27" Full HD – IPS, 180Hz, 1ms GTG, HDR10, DisplayPort/HDMI, Compatível com G-Sync e FreeSync', price: 400, img: '/monitor-2.png', discount: 25, popularRank: 9, sold: 937 },
  { id: '3', title: 'Monitor Gamer 24" Full HD – 100Hz, 1ms, Tela VA, HDMI, Widescreen', price: 500, img: '/monitor-3.jpg', discount: 12, popularRank: 21, sold: 537 },
  { id: '4', title: 'Monitor Gamer 24" Full HD – IPS, 180Hz, 0,5ms, HDMI/DP, Antirreflexo, Altura Ajustável, Preto', price: 500, img: '/monitor-4.webp', discount: 20, popularRank: 22, sold: 467 },
  { id: '5', title: 'Monitor Gamer Curvo 31.5" Widescreen – LED, 165Hz, 1ms, Design Imersivo', price: 500, img: '/monitor-2.png', discount: 30, popularRank: 29, sold: 297 },
  { id: '6', title: 'Monitor Gamer 27" Full HD – IPS, 180Hz, 0,5ms, HDMI/DP, Antirreflexo, Altura Ajustável, Preto', price: 500, img: '/monitor-1.jpg', discount: 20, sold: 246 },
  { id: '7', title: 'Monitor Curvo Ultrawide 34" WQHD – 165Hz, 1ms, HDMI/DP, FreeSync Premium, Preto', price: 500, img: '/monitor-4.webp', discount: 40, sold: 856 },
  { id: '8', title: 'Monitor 27" Full HD – 75Hz, 5ms, HDMI, FreeSync, Modo Gamer', price: 400, img: '/monitor-3.jpg', discount: 12, sold: 638 },
  { id: '9', title: 'Monitor Gamer 27" Full HD – IPS, 100Hz, 1ms, HDMI/DisplayPort', price: 500, img: '/monitor-1.jpg', discount: 5, sold: 239 },
  { id: '10', title: 'Monitor 24" Full HD – IPS, 75Hz, HDMI, FreeSync, Preto', price: 500, img: '/monitor-4.webp', discount: 30, sold: 437 },
  { id: '11', title: 'Monitor 27" Full HD – 75Hz, 5ms, HDMI, FreeSync, Modo Gamer', price: 100, img: '/monitor-1.jpg', discount: 40, sold: 137 },
  { id: '12', title: 'Monitor Gamer 24" Full HD – Tela Plana VA, 144Hz, 1ms, HDMI, FreeSync Premium', price: 500, img: '/monitor-2.png', discount: 10, sold: 737 },
];


  return NextResponse.json(monitores)
}