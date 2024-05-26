// import {
//   Box,
//   Flex,
//   Heading,
//   IconButton,
//   Image,
//   Link,
//   Text,
// } from "@chakra-ui/react";
// import { MdDelete, MdEdit } from "react-icons/md";
// import { useSelector } from "react-redux";
// import { Link as RouterLink } from "react-router-dom";
// import { IoEyeOutline } from "react-icons/io5";

// const BlogCard = ({ blog }) => {
//   const getRandomInt = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const randomNumber = getRandomInt(1, 50);

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   return (
//     <Box
//       borderRadius="30"
//       _hover={{
//         shadow: "lg",
//         transform: "translateY(-10px)",
//         transition: "all 0.3s ease-in-out",
//       }}
//       bgColor="aliceblue"
//     >
//       <Image
//         src={blog.image}
//         alt={blog.title}
//         w="full"
//         h="200px"
//         objectFit="fit"
//         borderTopLeftRadius="lg"
//         borderTopRightRadius="lg"
//       />
//       <Flex py="5" px="4" direction="column" justifyContent="space-between">
//         <Flex direction="row " justifyContent="space-between">
//           <Flex alignItems="center" justifyContent="space-between">
//             <Heading as="h4" fontSize="lg" mb="3">
//               {blog.title}
//             </Heading>
//           </Flex>
//           <Flex alignItems="center" justifyContent="space-between" gap="7">
//             {/* View Button */}
//             <IconButton
//               aria-label="View"
//               as={RouterLink}
//               to="/editBlog"
//               icon={<IoEyeOutline />}
//             />
//             <Text>{randomNumber}</Text>

//             {/* Delete Button */}
//             {/* <IconButton
//               aria-label="Delete"
//               icon={<MdDelete />}
//               // onClick={handleDelete}
//               colorScheme="gray"
//             /> */}
//           </Flex>
//         </Flex>

//         <Link
//           as={RouterLink}
//           to={`/blogs/${blog._id}`}
//           fontFamily="Verdana"
//           _hover={{
//             textDecor: "none",
//             color: "Red",
//             fontWeight: "bolder",
//           }}
//         >
//           Read More
//         </Link>
//       </Flex>
//     </Box>
//   );
// };

// export default BlogCard;

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
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
    <Box
      borderRadius="30"
      _hover={{
        shadow: "lg",
        transform: "translateY(-10px)",
        transition: "all 0.3s ease-in-out",
      }}
      bgColor="aliceblue"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        w="full"
        h="200px"
        objectFit="cover"
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
      />
      <Flex py="5" px="4" direction="column" justifyContent="space-between">
        <Flex direction="row" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading as="h4" fontSize="lg" mb="3">
              {blog.title}
            </Heading>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" gap="4">
            {/* View Button */}
            <IconButton
              aria-label="View"
              as={RouterLink}
              to="/editBlog"
              icon={<IoEyeOutline />}
            />
            <Text>{randomNumber}</Text>
          </Flex>
        </Flex>

        <Link
          as={RouterLink}
          to={`/blogs/${blog._id}`}
          fontFamily="Verdana"
          _hover={{
            textDecor: "none",
            color: "red",
            fontWeight: "bolder",
          }}
        >
          Read More
        </Link>
      </Flex>
    </Box>
  );
};

export default BlogCard;
