"use client"

import { usePopupContext } from "./context/PopupProvider"
import Checkout from "./components/Checkout";
export default function Home() {
  const {setPopupState} = usePopupContext();

  const Car = () => {
    return (
      <div className="absolute top-0 h-full w-full bg-black/20">
        <div className="w-1/3 bg-white text-black">
          <h1>Car</h1>
          <button onClick={()=>setPopupState('')}>Close Modal</button>
        </div>
      </div>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <button onClick={()=>setPopupState(<Car />)} className="bg-black text-white p-4">Open Car Popup</button>
      <button onClick={()=>setPopupState(<Checkout />)} className="bg-black text-white p-4">Open Checkout Popup</button>
      </div>
    </main>
  )
}
