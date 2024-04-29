import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import blogs from "../blogs";

const BlogCard = ({ blog }) => {
  return (
    <Link
      as={RouterLink}
      to={`/blogs/${blog._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box borderRadius="lg" bgColor="white" _hover={{ shadow: "md" }}>
        <Image
          src={blog.image}
          alt={blog.title}
          w="full"
          h="500px"
          objectFit="cover"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" fontSize="lg" mb="3">
            {blog.title}
          </Heading>
        </Flex>
      </Box>
    </Link>
  );
};

export default BlogCard;
