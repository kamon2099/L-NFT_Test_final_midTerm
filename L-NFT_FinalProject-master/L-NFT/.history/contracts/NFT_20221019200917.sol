// SPDX-License-Identifier; MIT
pragma solidity ^0.8.0;
import "nft-marketplace/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "/Users/aungsumar/Documents/GitHub/L-NFT/nft-marketplace/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import ""


contract NFT is ERC721URIStorage{
    //auto increment
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;
    constructor(address marketplaceAddress) ERC721("LToken", "LT"){
        contractAddress = marketplaceAddress;

        }

        function CreteToken(string memory tokenURI) public returns(uint){
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender,newItemId);
            _setTokenURI(newItemId,tokenURI);
            setApprovalForAll(contractAddress,true);
            return newItemId;

        }

}