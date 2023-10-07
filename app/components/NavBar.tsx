import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='text-center shadow-md p-3 items-center flex justify-between'>
        <div className="font-bold text-xl">daLIST</div>

        <div className='space-x-4 text-lg'>
        <Link href='/'>List</Link>
        <Link href='/seen'>Seen</Link>
        <Link href='/faq'>FAQ</Link>
        </div>

        <div>
          <Link href="/signin" className='bg-blue-500 p-2  rounded text-white'>Signin</Link>
        </div>
    </nav>
  )
}

export default NavBar