import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from "react-icons/hi";

import HeaderMenu from "./HeadermenuItem";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
    >
      {/* Title/Logo */}
      <Link href="/">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="wide"
        >
          RST Store
        </Heading>
      </Link>

      {/* Hamburger Menu */}
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="6" h="6" />
      </Box>

      {/* Menu */}
      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
      >
        <HeaderMenu icon={HiShoppingBag} label="Cart" url="/cart" />
        <HeaderMenu icon={HiUser} label="Login" url="/login" />
      </Box>
    </Flex>
  );
};

export default Header;
