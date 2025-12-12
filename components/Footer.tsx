import React from 'react'
import { Heart } from 'lucide-react'
export default function Footer() {
  return (
    <div className='max-w-6xl mx-auto relative'>
        <div className='flex justify-center px-4 py-6 text-gray-400 space-x-4 backdrop-blur-md'>
            <div> © {new Date().getFullYear()} Alexander Zirngast.</div>
            <div className='flex space-x-2'>Made with <span className='text-purple-500'><Heart/></span></div>
        </div>
    </div>
  )
}
