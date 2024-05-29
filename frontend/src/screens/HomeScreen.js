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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listBlogs());
    // Show welcome message when component mounts
    // toast.success("Welcome to Blogosphere!");
  }, [dispatch]);

  useEffect(() => {
    toast.success("Welcome to Blogosphere!");
  }, []);

  useEffect(() => {
    if (userInfo) {
      toast.success(`${userInfo.name} Logged In!! `);
    }
  }, [userInfo]);

  const handleCreatePost = () => {
    // Add your logic here for creating a new blog post
    //console.log("Create post clicked");
  };

  const handleLatesPost = () => {
    //console.log("Latest Blog clicked");
  };

  return (
    <>
      <ToastContainer />
      <Flex justify="space-between" align="center">
        <Heading as="h2" mb="10" fontSize="25px" mt="4" fontFamily="Arial ">
          All Blogs
        </Heading>
      </Flex>

      <Flex justifyContent="space-between" direction="row">
        <Button
          as={RouterLink}
          size="lg"
          to="/postBlog"
          colorScheme="teal"
          border="1px solid #fff"
          fontFamily=" Arial"
          fontWeight="bold"
          p={{ base: "18px", md: "22px" }}
          onClick={handleCreatePost}
          _hover={{
            textDecor: "none",
            bgColor: "green",
            fontWeight: "bolder",
            shadow: "lg",
            transform: "translateY(-10px)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Create Post
        </Button>

        <Button
          as={RouterLink}
          size="lg"
          to="/latestBlogs"
          colorScheme="teal"
          border="1px solid #fff"
          fontFamily=" Arial"
          fontWeight="bold"
          p={{ base: "18px", md: "22px" }}
          onClick={handleLatesPost}
          _hover={{
            textDecor: "none",
            bgColor: "green",
            fontWeight: "bolder",
            shadow: "lg",
            transform: "translateY(-10px)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Latest Blogs
        </Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
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

// {blogs
//             .slice()
//             .reverse()
//             .map((blog) => (
//               <BlogCard key={blog._id} blog={blog} />
//             ))}
