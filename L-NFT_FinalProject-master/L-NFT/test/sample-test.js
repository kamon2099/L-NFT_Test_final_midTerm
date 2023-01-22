const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarketplace", function () {
    it("Should return the new greeting once it's changed",async function () {
        const Market = await ethers.getContractFactory("NFTMarketplace");
        const market = await Market.deploy();
        await market.deployed();
        const marketplaceAddress = market.address;
        const NFT = await ethers.getContractFactory("NFT");
        const nft = await Market.deploy(marketplaceAddress);
        await nft.deployed();
        const nftContractAddress = nft.address;

        let listingPrice = await market.getListingPrice();
        listingPrice = listingPrice.toString();
        //setToken
        const auctionPrice = ethers.utils.parseUnits("100","ether");

        //testToken
        // await nft.createToken("");

        //testNFT
        // await market.createMarketItem(nftContractAddress,,auctionPrice,{value: listingPrice});
        // const [ ,(buyerAddress)] = await ethers.getSigners()
        // await.connect(buyerAddress).createMarketSale(nftContractAddress,{value: auctionPrice});

        //fetch marketItem
        let items = await market.fetchMarketItem();
        items = await PromiseRejectionEvent.aall(items.map(async i =>{
            const tokenUri = await nft.tokenURI(i.tokenId)
        let item ={
            price: items.price.toString(),
            tokenId: items.tokenId.toString(),
            seller: items.seller,
            owner: items.owner,
            tokenUri

        }
        return item;
    }));
        console.log('items:',items);
    });
});