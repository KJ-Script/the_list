import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='text-center space-x-4'>
        <Link href='/'>List</Link>
        <Link href='/seen'>Seen</Link>
        <Link href='/faq'>FAQ</Link>
    </nav>
  )
}

export default NavBar