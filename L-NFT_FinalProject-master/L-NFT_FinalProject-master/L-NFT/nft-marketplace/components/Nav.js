import React from 'react' ;
import { useState } from 'react';
import {Logo, menu } from '../assets'

import Link from 'next/link';


const Nav =() => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className='w-full flex py-6 justify-between 
      items-center navbar bg-Neutral-400'>
        {/* image for Logo */}
        <img src={Logo} alt="L-NFT" className="w-[120px] h-[120px]"/>

        <ul className="list-none sm:flex hidden justify-end
        items-center flex-1">
            <li>
              <Link href="/">
                <a className='mr-4 text-white'> Home</a>
                </Link>
            </li>
            <li>
              <Link href="../pages/index.js">
                <a className='mr-4 text-white'>
                  Store </a>
              </Link>
            </li>
            <li>
              <Link href="../Smart Contract/mintNFT.js">
              <a className='mr-4 text-white'>
                  Create NFT
                  </a>
                </Link>
            </li>
            <li>
              <Link herf="/"><a className='mr-4 text-white'>
                  My Collection</a></Link>
            </li>
          
        </ul>
        {/* toggle navigation bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Navigation icon */}
          <img 
            src={toggle ? close : menu}
            alt='menu' className='w-[28px] h-[28px] object-contain'
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6
            bg-black-gradient absolute top=20 right-0 mx-4
            my-2 min-w-[140px] rounded-xl sidebar`}
          >
      

          {/* When dropdown is useing */}
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          <li>
              <Link href="/">
                <a className='mr-4 text-white'> Home</a>
                </Link>
            </li>
            <li>
              <Link href="../pages/index.js">
                <a className='mr-4 text-white'>
                  Store </a>
              </Link>
            </li>
            <li>
              <Link href="../Smart Contract/mintNFT.js">
              <a className='mr-4 text-white'>
                  Create NFT
                  </a>
                </Link>
            </li>
            <li>
              <Link herf="/"><a className='mr-4 text-white'>
                  My Collection</a></Link>
            </li>
            <button className='theme.colors.RusticRed text-white font-[Poppins] duration-500 px-6 py-2'>
              Login 
              {/* Login Metamask onClick */}
            </button>
          </ul>

          </div>

        </div>
      </nav>

      {/* <nav>
      <p className="text-4xl font-bold">L-NFT Marketplace</p>
        <div className="flex mt-4"></div>
        <Link href="/">
          <a className='mr-4 theme.colors.TallPoppy'>Home</a>
        </Link>
        <Link href="/">
          <a className='mr-4 text-blue-500'>Store</a>
        </Link>
        <Link href="/">
          <a className='mr-4 text-blue-500'>Create Item</a>
        </Link>
        <Link href="/">
          <a className='mr-4 text-blue-500'>My Collection</a>
        </Link>
      </nav> */}
    </div>
  )
}

export default Nav;