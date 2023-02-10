const hre = require("hardhat");

async function main() {
  const owners = [
    "0x0475Ab76f00cd0A785a4Ae90101B49B31B4EC0Ac",
    "0x721A6D070Fb83Ff8Ab581D011467C1CCB6F4F399",
    "0x04B0360a3D1Ac616c882aF29279ED292978602E1",
  ];
  const required = 2;
  const MultisigWallet = await hre.ethers.getContractFactory("MultisigWallet");
  const multisigWallet = await MultisigWallet.deploy(owners, required);

  await multisigWallet.deployed();

  console.log(`deploying contract at: ${multisigWallet.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
