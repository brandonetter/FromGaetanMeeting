"use client"

import { usePopupContext } from "./context/PopupProvider"
import Checkout from "./components/Checkout";
import Car from "./components/Car";
export default function Home() {
  const {setPopupState} = usePopupContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <button onClick={()=>setPopupState(<Car />)} className="bg-black text-white p-4">Open Car Popup</button>
      <button onClick={()=>setPopupState(<Checkout />)} className="bg-black text-white p-4">Open Checkout Popup</button>
      </div>
    </main>
  )
}
