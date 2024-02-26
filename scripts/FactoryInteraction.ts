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

// Creation of Blog from Factory Transaction Hash
// 0xeaea9731d28f071de548de6092558edb0a0f529cc0f55d9029f72448ce0dce23