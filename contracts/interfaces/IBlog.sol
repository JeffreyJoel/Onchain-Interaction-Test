// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IBlog {
    function createNewBlog(
        string memory _title,
        string memory _description
    ) external;

    function togglePublished(uint _i) external;

    function deleteBlogItem(uint _i) external;

    function updateTitle(uint _i, string memory _newTitle) external;

    function updateDescription(uint _i, string memory _newDescription) external;
}
