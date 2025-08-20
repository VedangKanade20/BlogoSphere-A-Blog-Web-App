import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction={{ base: "column", md: "row" }}
      bg="gray.200"
      py="6"
      shadow="lg"
      mt="4"
      px={{ base: "4", md: "8" }}
    >
      <Box flex="1">
        <Text
          fontSize="md"
          color="black"
          fontWeight="bold"
          fontFamily="Arial"
          textAlign={{ base: "center", md: "left" }}
        >
          © Blogosphere {new Date().getFullYear()}
        </Text>
      </Box>
      <Box flex="1">
        <Text
          fontSize="md"
          color="#1c1c50"
          fontWeight="bold"
          fontFamily="Georgia"
          mt={{ base: "2", md: "0" }}
          textAlign={{ base: "center", md: "right" }}
        >
          Created with{" "}
          <span role="img" aria-label="love">
            ❤
          </span>{" "}
          by{" "}
          <Link color="blue.500" href="https://vedangkanade.me/">
            Vedang V Kanade
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
