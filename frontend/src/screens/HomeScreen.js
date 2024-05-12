import { Button, Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { listBlogs } from "../actions/blogActions";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const blogsList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogsList;

  useEffect(() => {
    dispatch(listBlogs());
    // Show welcome message when component mounts
    // toast.success("Welcome to Blogosphere!");
  }, [dispatch]);

  useEffect(() => {
    toast.success("Welcome to Blogosphere!");
  }, []);

  const handleCreatePost = () => {
    // Add your logic here for creating a new blog post
    console.log("Create post clicked");
  };

  const handleLatesPost = () => {
    console.log("Latest Blog clicked");
  };

  return (
    <>
      <ToastContainer />
      <Flex justify="space-between" align="center">
        <Heading as="h2" mb="10" fontSize="25px" mt="4" fontFamily="Arial ">
          All Blogs
        </Heading>

        <Button
          as={RouterLink}
          size="sm"
          to="/postBlog"
          colorScheme="teal"
          border="1px solid #fff"
          fontFamily=" Teko"
          fontWeight="bold"
          p={{ base: "18px", md: "22px" }}
          onClick={handleCreatePost}
        >
          Create Post
        </Button>
      </Flex>

      <Flex>
        <Button
          as={RouterLink}
          size="sm"
          to="/latestBlogs"
          colorScheme="teal"
          border="1px solid #fff"
          fontFamily=" Teko"
          fontWeight="bold"
          p={{ base: "18px", md: "22px" }}
          onClick={handleLatesPost}
        >
          Latest Blogs
        </Button>
      </Flex>

      {loading ? (
        // <p>Loading.....</p>
        <Loader />
      ) : // <Loading />
      error ? (
        // <p>{error}</p>
        <Message type="error">{error}</Message>
      ) : (
        // <ErrorMessage />
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr ",
          }}
          gap="12"
          mt="10"
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
