// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../Todo.sol";

interface ITodoFactory {
    function createTodoContract() external;

    function getTodoContracts() external view returns (Todo[] memory);
}
