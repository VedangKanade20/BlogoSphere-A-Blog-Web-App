// import { Flex, Text } from "@chakra-ui/react";

// const Footer = () => {
//   return (
//     <Flex as="footer" justifyContent="center" py="5">
//       <Text>
//         Copyright {new Date().getFullYear()}. RST Store. All Rights Reserved.
//       </Text>
//     </Flex>
//   );
// };

// export default Footer;

import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      bg="gray.100"
      py="4"
    >
      <Text fontSize="sm" color="gray.600">
        Copyright {new Date().getFullYear()} Your Blog Application. All rights
        reserved.
      </Text>
      <Text fontSize="sm" color="gray.600" mt="2">
        Created with{" "}
        <span role="img" aria-label="love">
          ❤
        </span>{" "}
        by{" "}
        <Link
          color="blue.500"
          href="https://my-portfolio-lemon-sigma-58.vercel.app/"
        >
          Vedang Kanade
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
