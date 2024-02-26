// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import './Todo.sol';

contract TodoFactory{
    Todo public todo;

     Todo[] todoContracts;


    function createTodoContract() external {
        todo = new Todo();

        todoContracts.push(todo);
    }

    function getTodoContracts() external view returns(Todo[] memory) {
        return todoContracts;
    }
}
