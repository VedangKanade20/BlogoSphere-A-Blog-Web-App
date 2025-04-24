import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text, Flex, Image, VStack, Container } from '@chakra-ui/react';
import { listBlogs } from '../actions/blogActions';
import BlogCard from '../components/BlogCard';

const LandingPage = () => {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  const trendingBlogs = blogs ? blogs.sort(() => 0.5 - Math.random()).slice(0, 3) : [];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, teal.500, blue.600)"
        color="white"
        py={{ base: 12, md: 24 }}
        textAlign="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={6}>
            <Heading
              as="h1"
              size={{ base: '2xl', md: '4xl' }}
              fontWeight="extrabold"
              lineHeight="shorter"
            >
              Welcome to BlogoSphere
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'xl' }}
              maxW="3xl"
              textAlign="center"
              opacity={0.9}
            >
              Discover inspiring stories, share your thoughts, and connect with a vibrant community of writers and readers.
            </Text>
            <Flex gap={4} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                to="/register"
                size="lg"
                colorScheme="teal"
                variant="solid"
                _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
                px={8}
              >
                Get Started
              </Button>
              <Button
                as={Link}
                to="/home"
                size="lg"
                colorScheme="whiteAlpha"
                variant="outline"
                _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
                px={8}
              >
                Explore Blogs
              </Button>
            </Flex>
          </VStack>
        </Container>
      </Box>

      {/* Trending Blogs Preview */}
      <Container maxW="container.xl" py={12}>
        <Heading
          as="h2"
          size="xl"
          mb={8}
          textAlign="center"
          color="teal.600"
          fontWeight="bold"
        >
          Trending Stories
        </Heading>
        <Flex
          wrap="wrap"
          justify="center"
          gap={6}
          align="stretch"
        >
          {trendingBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </Flex>
      </Container>

      {/* Features Section */}
      <Box bg="gray.50" py={12}>
        <Container maxW="container.xl">
          <Heading
            as="h2"
            size="xl"
            mb={8}
            textAlign="center"
            color="gray.700"
            fontWeight="bold"
          >
            Why BlogoSphere?
          </Heading>
          <Flex
            wrap="wrap"
            justify="center"
            gap={6}
            align="stretch"
          >
            <VStack
              p={6}
              bg="white"
              rounded="lg"
              shadow="lg"
              maxW="sm"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image src="/images/community.png" boxSize="100px" />
              <Text fontWeight="bold" fontSize="lg" color="teal.600">
                Vibrant Community
              </Text>
              <Text textAlign="center" color="gray.600">
                Join thousands of writers and readers sharing their stories.
              </Text>
            </VStack>
            <VStack
              p={6}
              bg="white"
              rounded="lg"
              shadow="lg"
              maxW="sm"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image src="/images/creative.png" boxSize="100px" />
              <Text fontWeight="bold" fontSize="lg" color="teal.600">
                Unleash Creativity
              </Text>
              <Text textAlign="center" color="gray.600">
                Create and share blogs with an intuitive editor.
              </Text>
            </VStack>
            <VStack
              p={6}
              bg="white"
              rounded="lg"
              shadow="lg"
              maxW="sm"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image src="/images/secure.png" boxSize="100px" />
              <Text fontWeight="bold" fontSize="lg" color="teal.600">
                Secure Platform
              </Text>
              <Text textAlign="center" color="gray.600">
                Your data is safe with our robust security measures.
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;