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
