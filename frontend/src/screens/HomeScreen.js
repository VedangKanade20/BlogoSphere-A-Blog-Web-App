import { Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <>
      <Heading as="h2" mb="10" fontSize="25px" mt="4">
        All Blogs
      </Heading>

      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr ",
        }}
        gap="10"
        mt="8"
      >
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
