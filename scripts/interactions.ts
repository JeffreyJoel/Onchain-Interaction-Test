import { ethers } from "hardhat";

async function main() {
  try {
    const TodoContract = "0x786c61bbEa01953E23EDA442d3622202F9439d9C";
    const TODO = await ethers.getContractAt("Todo", TodoContract);

    const createTodo = await TODO.createNewTodo('AnotherTodo', 'Sample description');
    await createTodo.wait();

    console.log("Todo created:", createTodo);

    const todoList = await TODO.todoList(0);
    console.log("Todo list:", todoList);
  } catch (error) {
    console.error("Error:", error);
    process.exitCode = 1;
  }
}

main();