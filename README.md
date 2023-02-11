# Multisig-wallet 

This pj was demo multisig_wallet with hardhad framework.Then already testing on [Remix](http://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js).

## Install depencies

```shell
npm install
```

## Demo

[deploy on vercel for frontend](https://multisig-wallet-frontend.vercel.app).

- Note --> You can not see on Transcation histories on the vercel deployment because of can not increase `+1` for txId.
- You have to build front_end folder inside your hardhat backend pj. [front_end github link](https://github.com/leopico/multisig-wallet-frontend). Because of I linked for solidity abi-code with front_end folder if you wanna deploy with localhost.You can see on hardhat.config.js.


## Acknowledgements

 - [Hardhar documentation](https://hardhat.org/).
 
 ## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`RPC_URL`

`PRIVATE_KY`

`ETHERSCAN_API_KEY`

## Tech Stack


**Server:** Solidity, Hardhat

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
