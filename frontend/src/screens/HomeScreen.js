import { Button, Flex, Grid, Heading, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { listBlogs } from "../actions/blogActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const blogsList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogsList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

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
      {loading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
