import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaRegistered } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
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
      bgColor="whitesmoke"
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
          url="/login"
          label="Login"
          icon={<Icon as={BiLogInCircle} mr="1" w="4" h="4" />}
        />
        <HeaderMenuItem
          url="/register"
          label="Register"
          icon={<Icon as={FaRegistered} mr="1" w="4" h="4" />}
        />
      </Box>
    </Flex>
  );
};

export default Header;
