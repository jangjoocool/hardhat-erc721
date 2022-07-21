//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract PolygonERC721 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("PolygonNFT", "PGNFT") {}

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
    }
    
    function burn(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }
}
