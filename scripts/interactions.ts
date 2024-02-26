import { ethers } from "hardhat";

async function main() {
  try {
    const BlogContract = "0x31889016b2aE083cb85adA7B23b5b216c4314F0f";
    const Blog = await ethers.getContractAt("Blog", BlogContract);

    const createBlog = await Blog.createNewBlog(
      "Blog Title",
      "Sample description"
    );
    await createBlog.wait();

    console.log("Blog created:", createBlog);

    const BlogList = await Blog.blogList(0);
    console.log("Blog list:", BlogList);
  } catch (error) {
    console.error("Error:", error);
    process.exitCode = 1;
  }
}

main();

// Blog Interaction from Script Transaction Hash
// 0x2297f47f56585612e05e3b66198d23463bdbf960cee19b84728f25662decd4e1
