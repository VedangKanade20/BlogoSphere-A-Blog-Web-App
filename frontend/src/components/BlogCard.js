import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const BlogCard = ({ blog }) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = getRandomInt(1, 50);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Link
      as={RouterLink}
      to={`/blogs/${blog._id}`}
      fontFamily="Verdana"
      _hover={{
        textDecor: "none",
        fontWeight: "bolder",
      }}
    >
      <Box
        borderRadius="30"
        _hover={{
          shadow: "xl",
          transform: "translateY(-15px)",
          transition: "all 0.3s ease-in-out",
        }}
        bgColor="aliceblue"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          w="full"
          h="300px"
          objectFit="cover"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Flex direction="row" justifyContent="space-between">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading as="h4" fontSize="lg" mb="3" alignItems="center">
                {blog.title}
              </Heading>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" gap="2">
              {/* View Button */}
              <IconButton aria-label="View" icon={<IoEyeOutline />} />
              <Text>{randomNumber}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default BlogCard;
