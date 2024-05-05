import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiTrendingUp } from "react-icons/hi";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import HeaderMenuItem from "./HeaderMenuItem";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="#F5F5F5"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
      zIndex="9999"
      shadow="lg"
    >
      <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
        <Heading
          as="h1"
          color="#1c1c50"
          fontWeight="bold"
          fontSize="25px"
          letterSpacing="wide"
          fontFamily="Arial Black"
        >
          Blogosphere
        </Heading>
      </Link>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="#444" w="6" h="6" />
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "3", md: "0" }}
      >
        <HeaderMenuItem
          url="/trendingBlogs"
          label="Trending Blogs"
          icon={<Icon as={HiTrendingUp} mr="1" w="6" h="6" color="green" />}
        />
        <HeaderMenuItem
          url="/login"
          label="Login"
          icon={
            <Icon as={RiLoginCircleFill} mr="1" w="6" h="6" color="green" />
          }
        />
      </Box>
    </Flex>
  );
};

export default Header;
