import React from 'react'

export default function Paragraph({text}: {text: string}) {
  return (
    <p className='text-base lg:text-xl'>{text}</p>
  )
}
