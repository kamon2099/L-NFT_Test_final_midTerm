import {ethers} from 'ethers';
import {useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from "web3modal"
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { nftaddress, nftmarketaddress } from '../../config';

import NFT from '/Users/aungsumar/Documents/GitHub/L-NFT/contracts/NFT.sol';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

export default function Home() {

  const [nfts, srtNfts] = useState([]);
  const [loadingState, setLoadingState] = useState('not-loaded');

  useEffect(()=> {
    loadNFTs();
  })
  async function loadNFTs(){
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);

    const data = await marketContract.fetchMarketItems()

    const items = await Promise.all(data.map(async i =>{
      const tokenUri = await tokenContract.tokenURI(i.tokenId);
      const meta = await axios.get(tokenUri);
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item;
    }));

    setNfts(items);
    setLoadingState('loaded');


  }
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
