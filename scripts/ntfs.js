require('dotenv').config({path: require('find-config')('.env')})
const fs = require('fs')
const FormData = require('form-data')
const axios = require('axios')
const {ethers} = require('ehters')

const contract = require('../artifacts/contracts/NFTContract.sol/NFTClase.json')
const {
    PINATA_API_KEY,
    PINATA_SECRET_KEY,
    API_URL,
    PRIVATE_KEY,
    PUBLIC_KEY,
    CONTRACT_ADDRESS
} = process.env

async function createImgInfo(imageRoute){
    const authResponse = await axios.get('https://api.pinata.cloud/data/testAuthentication',{
        headers:{
            pinata_api_key:PINATA_API_KEY,
            pinata_secret_api_key:PINATA_SECRET_KEY
        }
    })
    console.log(authResponse)
    const stream = fs.createReadStream(imageRoute)
    const data = new FormData()
    data.append("file",stream)
    const fileResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS',data,{
        headers:{
            "Content-type": `multipart/forma-data: boundary=${data._boundary}`,
            pinata_api_key:PINATA_API_KEY,
            pinata_secret_api_key:PINATA_SECRET_KEY
        }
    })
    const {data: fileData={}}=fileResponse
    const{IpfsHash}=fileData
    const fileIPFS = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`
    return fileIPFS

}