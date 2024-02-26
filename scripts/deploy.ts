import { ethers } from "hardhat";

async function main() {
  const todoFactory = await ethers.deployContract("TodoFactory");

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


// Factory contract deployment:  0xEBe91867D2e5aA6364E71d6da8de5d6F364bEd8E