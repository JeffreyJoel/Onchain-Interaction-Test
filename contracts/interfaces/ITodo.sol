// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITodo {
    function createNewTodo(
        string memory _title,
        string memory _description
    ) external;

    function toggleCompleted(uint _i) external;

    function deleteTodoItem(uint _i) external;

    function updateTitle(uint _i, string memory _newTitle) external;

    function updateDescription(uint _i, string memory _newDescription) external;
}
