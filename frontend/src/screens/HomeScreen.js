import { Grid, Heading } from "@chakra-ui/react";

import BlogCard from "../components/BlogCard";
import blogs from "../../../backend/data/blogs";

const HomeScreen = () => {
  return (
    <>
      <Heading as="h2" mb="8" fontSize="xl">
        All Blogs
      </Heading>

      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr ",
        }}
        gap="8"
      >
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
