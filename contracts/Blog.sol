// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Blog {
    struct blog {
        string title;
        string description;
        bool published;
    }
    blog[] public blogList;

    function createNewBlog(
        string memory _title,
        string memory _description
    ) external {
        blogList.push(blog(_title, _description, false));
    }

    function togglePublished(uint _i) external {
        blogList[_i].published = !blogList[_i].published;
    }

    function deleteBlogItem(uint _i) external {
        delete blogList[_i];
    }

    function updateTitle(uint _i, string memory _newTitle) external {
        blogList[_i].title = _newTitle;
    }

    function updateDescription(
        uint _i,
        string memory _newDescription
    ) external {
        blogList[_i].description = _newDescription;
    }
}
