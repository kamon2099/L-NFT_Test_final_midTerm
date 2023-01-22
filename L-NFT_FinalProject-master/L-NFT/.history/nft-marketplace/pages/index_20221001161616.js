import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className="polder-b p-6">
        <p className="text-4xl font-bold">L-NFT Marketplace</p>
        <div className="flex mt-4"></div>
        <Link href="/">
          <a className='mr-4 text-blue-500'>Home</a>
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

                </nav>
      </div>
  )
  }
