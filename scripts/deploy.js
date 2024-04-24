const { ethers } = require("hardhat");

async function main() {
    const NFT2024 = await ethers.getContractFactory('NFTClase');
    const nft2024 = await NFT2024.deploy();
    const txHash = nft2024.deployTransaction.hash;
    const txReceipt = await ethers.provider.waitForTransaction(txHash);
    console.log("Contract deployed to Address:", txReceipt.contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
