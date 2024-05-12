// // import { Flex, Text } from "@chakra-ui/react";

// // const Footer = () => {
// //   return (
// //     <Flex as="footer" justifyContent="center" py="5">
// //       <Text>
// //         Copyright {new Date().getFullYear()}. RST Store. All Rights Reserved.
// //       </Text>
// //     </Flex>
// //   );
// // };

// // export default Footer;

// import { Flex, Link, Text } from "@chakra-ui/react";

// const Footer = () => {
//   return (
//     <Flex
//       as="footer"
//       align="center"
//       justify="center"
//       direction="column"
//       bg="gray.100"
//       py="4"
//     >
//       <Text fontSize="sm" color="gray.600">
//         Copyright {new Date().getFullYear()} Your Blog Application. All rights
//         reserved.
//       </Text>
//       <Text fontSize="sm" color="gray.600" mt="2">
//         Created with{" "}
//         <span role="img" aria-label="love">

//         </span>{" "}
//         by{" "}
//         <Link
//           color="blue.500"
//           href="https://my-portfolio-lemon-sigma-58.vercel.app/"
//         >
//           Vedang Kanade
//         </Link>
//       </Text>
//     </Flex>
//   );
// };

// export default Footer;

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
          <Link
            color="blue.500"
            href="https://my-portfolio-lemon-sigma-58.vercel.app/"
          >
            Vedang V Kanade
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
