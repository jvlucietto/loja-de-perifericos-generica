import { NextResponse } from "next/server";

export async function GET() {

const teclados = [
  { id: "1",  title: 'Teclado com Fio USB TechBoard K120 – Resistente à Respingos, Layout ABNT2', price: 400, img: '/keyboard-1.webp', discount: 60, popularRank: 1, sold: 823 },
  { id: "2",  title: 'Teclado com Fio MultiBoard TF100 – USB, Layout ABNT2, Cabo 120cm, Resistente à Água, Preto', price: 900, img: '/keyboard-2.jpg', discount: 28, popularRank: 4, sold: 789 },
  { id: "3",  title: 'Teclado Mecânico Gamer Vulcan K60 – Anti-Ghosting, RGB, Switch Red, ABNT2', price: 1500, img: '/keyboard-6.webp', discount: 10, popularRank: 5, sold: 652 },
  { id: "4",  title: 'Teclado Mecânico Gamer Titan TKL 515 – RGB LightSync, USB 2.0, Preto', price: 700, img: '/keyboard-3.jpg', discount: 30, popularRank: 6, sold: 598 },
  { id: "5",  title: 'Teclado Gamer ProMech X TKL Rapid – Switch Magnético-Analógico, Rapid Trigger, Layout US, Preto', price: 800, img: '/keyboard-4.jpg', discount: 60, popularRank: 10, sold: 541 },
  { id: "6",  title: 'Teclado Mecânico Gamer GX512 Carbon – Layout ABNT2, RGB LightSync, USB Passthrough, Switch GX Brown', price: 400, img: '/keyboard-2.jpg', discount: 20, popularRank: 14, sold: 520 },
  { id: "7",  title: 'Teclado Mecânico Gamer Alloy Rise G75 – RGB, Switch Linear, Anti-Ghosting, Preto', price: 999, img: '/keyboard-5.jpg', discount: 25, popularRank: 23, sold: 489 },
  { id: "8",  title: 'Teclado Mecânico Gamer RedWolf APS – RGB, Switch Brown, ABNT2, Preto', price: 500, img: '/keyboard-4.jpg', discount: 30, sold: 478 },
  { id: "9",  title: 'Teclado Gamer ProMech X TKL Rapid – Switch Magnético-Analógico, Rapid Trigger, Layout US', price: 100, img: '/keyboard-1.webp', discount: 10, sold: 379 },
  { id: "10",  title: 'Teclado Gamer ProMech X TKL Rapid – Switch Magnético-Analógico, Rapid Trigger, Layout US', price: 500, img: '/keyboard-5.jpg', discount: 23, sold: 298 },
  { id: "11",  title: 'Teclado Mecânico Gamer Alloy Rise G75 Compact – RGB, Switch Linear, Layout 75%, Anti-Ghosting, Preto', price: 500, img: '/keyboard-6.webp', discount: 20, sold: 159 },
];


  return NextResponse.json(teclados)

}