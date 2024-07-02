import React from 'react'

export default function Paragraph({children}: {children: any}) {
  return (
    <p className='text-base lg:text-2xl'>{children}</p>
  )
}
