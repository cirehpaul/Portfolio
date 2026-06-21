import React, {useEffect, useState} from 'react'

export default function Preloader(){
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setVisible(false), 900)
    return () => clearTimeout(t)
  },[])
  if (!visible) return null
  return (
    <div id="preloader" className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f2027] to-[#203a43]">
      <div className="text-center">
        <div className="mx-auto w-40 h-40 rounded-xl overflow-hidden shadow-xl">
          <img src="/Portfolio/img/2X2.png" alt="CPBC logo" className="w-full h-full object-cover" />
        </div>
        <div className="mt-4 text-white font-semibold">Welcome to my Portfolio!</div>
      </div>
    </div>
  )
}
