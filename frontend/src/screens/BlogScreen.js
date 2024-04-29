// import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
// import { Link as RouterLink, useParams } from "react-router-dom";
// import blogs from "../blogs";

// const ProductScreen = () => {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b._id === id);

//   return (
//     <>
//       <Flex mb="5">
//         <Button as={RouterLink} to="/" colorScheme="gray">
//           Go Back
//         </Button>
//       </Flex>

//       <Grid templateColumns={{ sm: "1fr", md: "8fr 4fr 1fr" }} gap="10">
//         {/* Column 1 */}
//         <Image src={blog.image} alt={blog.name} borderRadius="md" h="400px" />

//         {/* Column 2 */}
//         <Flex direction="column">
//           <Heading as="h2" fontSize="4xl" mb="4">
//             {blog.name}
//           </Heading>

//           <Text>{blog.description}</Text>
//         </Flex>

//         {/* Column 3 */}
//       </Grid>
//     </>
//   );
// };

// export default ProductScreen;

import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import blogs from "../blogs";

const BlogScreen = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b._id === id);

  return (
    <Flex direction="column" alignItems="center" mt="6">
      {/* Go Back Button */}
      <Button
        as={RouterLink}
        to="/"
        colorScheme="blue"
        size="sm"
        mb="4"
        alignSelf="flex-start"
      >
        Go Back
      </Button>

      {/* Blog Grid */}
      <Grid
        templateColumns={{ sm: "1fr", md: "3fr 1fr" }}
        gap={{ base: "4", md: "8" }}
        maxWidth="1200px"
        width="100%"
      >
        {/* Blog Image */}
        <Image
          src={blog.image}
          alt={blog.title}
          borderRadius="md"
          maxH="400px"
          w="full"
        />

        {/* Blog Details */}
        <Flex direction="column" alignItems="flex-start">
          {/* Blog Name */}
          <Heading as="h2" fontSize="4xl" mb="4">
            {blog.title}
          </Heading>

          {/* Blog Description */}
          <Text fontSize="lg" mb="6">
            {blog.content}
          </Text>

          {/* Additional Information */}
          <Flex direction="column" alignItems="flex-start">
            {/* Author */}
            <Text fontSize="lg" mb="2">
              <strong>Author:</strong> {blog.author}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default BlogScreen;
