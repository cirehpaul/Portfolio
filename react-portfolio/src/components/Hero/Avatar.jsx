import React from 'react'

export default function Avatar(){
  return (
    <div className="relative mx-auto w-72 max-w-full rounded-[2rem] border border-white/10 bg-[#071026]/80 p-1 shadow-[0_20px_90px_rgba(0,212,255,0.12)]">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0a1420] ring-1 ring-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-purple/10 opacity-80" />
        <img src="/img/2x2.png" alt="Cire Paul avatar" className="relative h-full w-full object-cover" />
      </div>
    </div>
  )
}
