const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const signer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const initialVirtualEtherBalance = 1000;
  const initialTokensForUniswapBalance = 5000;
  const initialTokensForBondingCurveBalance = 2000;
  const uniswapV2Router02 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const tradingFeeBasisPoints = 300; // Example: 3%
  const createTypeHash = ethers.encodeBytes32String("exampleTypeHash");
  const initCodePairHash = ethers.encodeBytes32String("exampleInitCodePairHash");

  console.log("Deploying ParlayCoreSimple...");
  const ParlayCoreSimpleContract = await ethers.getContractFactory("ParlayCoreSimple");
  const parlayCoreSimple = await ParlayCoreSimpleContract.deploy(
    signer,
    initialVirtualEtherBalance,
    initialTokensForUniswapBalance,
    initialTokensForBondingCurveBalance,
    uniswapV2Router02,
    tradingFeeBasisPoints,
    createTypeHash,
    initCodePairHash
  );

  await parlayCoreSimple.waitForDeployment();
  console.log("ParlayCoreSimple deployed to:", parlayCoreSimple.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });