import Link from 'next/link'
import React from 'react'

export default function button({link, text}: {link:string, text:string}) {
  return (
    <Link className='text-pink font-normal' href={`${link}`}>{text}</Link>
  )
}
