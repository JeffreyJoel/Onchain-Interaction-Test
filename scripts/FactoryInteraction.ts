import { ethers } from "hardhat";

async function main() {

  const todoFactoryContract = "0xEBe91867D2e5aA6364E71d6da8de5d6F364bEd8E";
  const TODOFACTORY = await ethers.getContractAt("ITodoFactory", todoFactoryContract);

  const createTodoTx = await TODOFACTORY.createTodoContract();
  await createTodoTx.wait();

  const clones = await TODOFACTORY.getTodoContracts();

  console.log(clones);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
