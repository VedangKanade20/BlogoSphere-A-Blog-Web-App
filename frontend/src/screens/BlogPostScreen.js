import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
  Avatar,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import FormContainer from "../components/FormContainer";

const BlogPostScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`/api/uploads`, formData, config);
      setImage(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center" py="5" mt="6">
        <FormContainer>
          <Heading as="h1" mb="8" fontSize="3xl">
            Create Blog
          </Heading>

          <form onSubmit={submitHandler}>
            {/* TITLE */}
            <FormControl id="title" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <Spacer h="3" />

            {/* CONTENT */}
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Input
                type="text"
                placeholder="Enter Blog content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
            <Spacer h="3" />

            {/* IMAGE */}
            <FormControl id="image" isRequired>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Input type="file" onChange={uploadFileHandler} />
            </FormControl>
            <Divider />

            <Button type="submit" colorScheme="teal" mt="4">
              Update
            </Button>
          </form>
        </FormContainer>
      </Flex>
    </>
  );
};

export default BlogPostScreen;
