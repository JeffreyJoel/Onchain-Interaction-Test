import { ethers } from "hardhat";

async function main() {
  const todoFactory = await ethers.deployContract("BlogFactory");

  await todoFactory.waitForDeployment();

  console.log(
    `Factory  deployed to ${todoFactory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Blog Factory contract deployment:  0x341f806545D278f21ca9E321Fe0E35464A38E1a9