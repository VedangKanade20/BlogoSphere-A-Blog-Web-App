// BlogPost.js

import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const BlogPostScreen = () => {
  return (
    <Box p="6">
      <VStack align="start" spacing="6">
        <Heading size="xl">Title of the Blog Post</Heading>
        <Text color="gray.500">Published on May 3, 2024</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </Text>
        <Divider />
        <Text>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        </Text>
        <Text>
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus.
        </Text>
      </VStack>
      <HStack mt="6" spacing="4" justify="flex-end">
        <Button colorScheme="teal">Edit</Button>
        <Button colorScheme="red">Delete</Button>
      </HStack>
    </Box>
  );
};

export default BlogPostScreen;
