import React from 'react'
import content from '../../data/content'

export default function Footer() {
  const { footer } = content
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-gray-300">
      <div className="text-center text-sm text-gray-500">{footer.copyright}</div>
    </footer>
  )
}
