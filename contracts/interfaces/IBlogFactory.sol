// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../Blog.sol";

interface IBlogFactory {
    function createBlogContract() external;

    function getBlogContracts() external view returns (Blog[] memory);
}
