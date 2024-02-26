import { ethers } from "hardhat";

async function main() {

  const blogFactoryContract = "0x341f806545D278f21ca9E321Fe0E35464A38E1a9";
  const BLOGFACTORY = await ethers.getContractAt("IBlogFactory", blogFactoryContract);

  const createBlogTx = await BLOGFACTORY.createBlogContract();
  await createBlogTx.wait();

  const clones = await BLOGFACTORY.getBlogContracts();

  console.log(clones);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
