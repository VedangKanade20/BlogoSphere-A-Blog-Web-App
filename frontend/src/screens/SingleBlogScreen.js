// import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

// import { useEffect } from "react";
// import { Link as RouterLink, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Rating from "../components/Rating";
// import { listBlogDetails } from "../actions/blogActions";
// import Loader from "../components/Loader";
// import Message from "../components/Message";

// const SingleBlogScreen = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const blogDetails = useSelector((state) => state.blogDetail);
//   const { loading, error, blog } = blogDetails;

//   useEffect(() => {
//     dispatch(listBlogDetails(id));
//   }, [id, dispatch]);

//   return (
//     <Flex direction="column" alignItems="center" mt="6">
//       {/* Go Back Button */}
//       <Button
//         as={RouterLink}
//         to="/"
//         colorScheme="blue"
//         size="sm"
//         mb="4"
//         alignSelf="flex-start"
//       >
//         Go Back
//       </Button>

//       {/* BLOG Grid */}

//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message type="error">{error}</Message>
//       ) : (
//         <Grid
//           templateColumns={{ sm: "1fr", md: "2fr 3fr" }}
//           gap={{ base: "4", md: "8" }}
//           maxWidth="1200px"
//           width="100%"
//         >
//           {/* BLOG Image */}
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             borderRadius="md"
//             maxH="600px"
//             w="full"
//           />

//           {/* BLOG Details */}
//           <Flex direction="column" alignItems="flex-start">
//             {/* BLOG title */}
//             <Heading as="h2" fontSize="4xl" mb="4">
//               {blog.title}
//             </Heading>

//             {/* BLOG Description */}
//             <Text fontSize="lg" mb="6">
//               {blog.content}
//             </Text>

//             {/* Additional Information */}
//             <Flex alignItems="center" justifyContent="space-between" gap="20">
//               <Text fontSize="2xl" fontWeight="bold" color="blue.600">
//                 {blog.author}
//               </Text>
//               <Rating value={blog.rating} color="yellow.500" />
//             </Flex>
//           </Flex>
//         </Grid>
//       )}
//     </Flex>
//   );
// };

// export default SingleBlogScreen;

// import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link as RouterLink, useParams } from "react-router-dom";

// const SingleBlogScreen = () => {
//   const { id } = useParams();

//   const [blog, setBlog] = useState({});

//   useEffect(() => {
//     const fetchBlog = async () => {
//       const { data } = await axios.get(`/api/blogs/${id}`);
//       setBlog(data);
//     };
//     fetchBlog();
//   }, [id]);

//   return (
//     <Flex direction="column" alignItems="center" mt="6">
//       {/* Go Back Button */}
//       <Button
//         as={RouterLink}
//         to="/"
//         colorScheme="blue"
//         size="sm"
//         mb="4"
//         alignSelf="flex-start"
//         // ml="8"
//       >
//         Go Back
//       </Button>

//       {/* Product Grid */}
//       <Grid
//         templateColumns={{ sm: "1fr", md: "4fr 3fr" }}
//         gap={{ base: "4", md: "8" }}
//         maxWidth="1200px"
//         width="100%"
//       >
//         {/* Product Image */}
//         <Image
//           src={blog.image}
//           alt={blog.name}
//           borderRadius="md"
//           maxH="600px"
//           w="full"
//         />

//         {/* Product Details */}
//         <Flex direction="column" alignItems="flex-start">
//           {/* Product Name */}
//           <Heading as="h2" fontSize="4xl" mb="4" fontFamily="Georgia">
//             {blog.title}
//           </Heading>

//           {/* Product Description */}
//           <Text fontSize="lg" mb="6" fontFamily="sans-serif" display="inline">
//             {blog.content}
//           </Text>

//           {/* Additional Information */}
//           <Flex direction="column" alignItems="flex-start">
//             {/* Author */}
//             <Text fontSize="lg" mb="2">
//               <strong>Author:</strong> {blog.author}
//             </Text>
//           </Flex>
//         </Flex>
//       </Grid>
//     </Flex>
//   );
// };

// export default SingleBlogScreen;

import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useParams } from "react-router-dom";
import { listBlogDetails } from "../actions/blogActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";

const SingleBlogScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const blogDetails = useSelector((state) => state.blogDetail);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogDetails(id));
  }, [id, dispatch]);

  return (
    <Flex direction="column" alignItems="center" mt="6">
      {/* Go Back Button */}
      <Button
        as={RouterLink}
        to="/"
        colorScheme="blue"
        size="sm"
        mb="4"
        alignSelf="flex-start"
      >
        Go Back
      </Button>

      {/* BLOG Grid */}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid
          templateColumns={{ sm: "1fr", md: "4fr 3fr" }}
          gap={{ base: "4", md: "8" }}
          maxWidth="1200px"
          width="100%"
        >
          {/* BLOG Image */}
          <Image
            src={blog.image}
            alt={blog.title}
            borderRadius="md"
            maxH="600px"
            w="full"
          />

          {/* BLOG Details */}
          <Flex direction="column" alignItems="flex-start">
            {/* BLOG title */}
            <Heading as="h2" fontSize="4xl" mb="4">
              {blog.title}
            </Heading>

            {/* BLOG Description */}
            <Text fontSize="lg" mb="6">
              {blog.content}
            </Text>

            {/* Additional Information */}
            <Flex alignItems="center" justifyContent="space-between" gap="20">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                {blog.author}
              </Text>
              <Rating value={blog.rating} color="yellow.500" />
            </Flex>
          </Flex>
        </Grid>
      )}
    </Flex>
  );
};

export default SingleBlogScreen;
