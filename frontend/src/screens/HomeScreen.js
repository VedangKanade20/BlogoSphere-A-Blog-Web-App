// import { Grid, Heading } from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import BlogCard from "../components/BlogCard";

// const HomeScreen = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const { data } = await axios.get("/api/blogs");
//       setBlogs(data);
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <>
//       <Heading as="h2" mb="10" fontSize="25px" mt="4">
//         All Blogs
//       </Heading>

//       <Grid
//         templateColumns={{
//           sm: "1fr",
//           md: "1fr 1fr",
//           lg: "1fr 1fr 1fr",
//           xl: "1fr 1fr 1fr ",
//         }}
//         gap="10"
//         mt="8"
//       >
//         {blogs.map((blog) => (
//           <BlogCard key={blog._id} blog={blog} />
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default HomeScreen;

import { Button, Flex, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get("/api/blogs");
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleCreatePost = () => {
    // Add your logic here for creating a new blog post
    console.log("Create post clicked");
  };

  return (
    <>
      <Flex justify="space-between" align="center">
        <Heading as="h2" mb="10" fontSize="25px" mt="4">
          All Blogs
        </Heading>

        <Button
          as={RouterLink}
          size="sm"
          to="/postBlog"
          colorScheme="blue"
          fontFamily="Arial"
          fontWeight="bold"
          p={{ base: "10px", md: "22px" }}
          onClick={handleCreatePost}
        >
          Create Post
        </Button>
      </Flex>

      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr ",
        }}
        gap="10"
        mt="7"
      >
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
