// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import './Blog.sol';

contract BlogFactory{
    Blog public blog;

     Blog[] blogContracts;


    function createBlogContract() external {
        blog = new Blog();

        blogContracts.push(blog);
    }

    function getBlogContracts() external view returns(Blog[] memory) {
        return blogContracts;
    }
}
