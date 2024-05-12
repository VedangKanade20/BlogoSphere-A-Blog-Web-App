// export default SingleBlogScreen;

// import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link as RouterLink, useParams } from "react-router-dom";
// import { listBlogDetails } from "../actions/blogActions";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import Rating from "../components/Rating";

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
//         size="sm"
//         colorScheme="teal"
//         border="1px solid #fff"
//         fontFamily="Arial"
//         fontWeight="bold"
//         p={{ base: "10px", md: "22px" }}
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
//           templateColumns={{ sm: "1fr", md: "1fr" }}
//           gap={{ base: "4", md: "8" }}
//           maxWidth="1200px"
//           width="100%"
//         >
//           {/* BLOG Image */}
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             borderRadius="md"
//             maxH="400px"
//             w="full"
//             mt="5"
//           />

//           {/* BLOG Details */}
//           <Flex direction="column" alignItems="flex-start">
//             {/* BLOG title */}
//             <Heading as="h2" fontSize="4xl" mb="4" fontFamily="Verdana">
//               {blog.title}
//             </Heading>

//             {/* BLOG Description */}
//             <Text fontSize="lg" mb="6" fontFamily="Verdana" textAlign="justify">
//               {blog.content}
//             </Text>

//             {/* Additional Information */}
//             <Flex alignItems="center" justifyContent="space-between" gap="5">
//               <Text
//                 fontSize="3xl"
//                 fontWeight="bold"
//                 color="blue.600"
//                 fontFamily="Verdana"
//               >
//                 {/* {blog.author} */} Ratings:
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
        size="sm"
        colorScheme="teal"
        border="1px solid #fff"
        fontFamily="Arial"
        fontWeight="bold"
        p={{ base: "10px", md: "22px" }}
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
          templateColumns={{ sm: "1fr", md: "1fr" }}
          gap={{ base: "4", md: "8" }}
          maxWidth="1200px"
          width="100%"
          mt="8"
        >
          {/* BLOG Details */}
          <Flex direction="column" alignItems="flex-start">
            {/* BLOG title */}
            <Heading as="h2" fontSize="4xl" mb="4" fontFamily="Verdana">
              {blog.title}
            </Heading>

            {/* BLOG Image */}

            <Image
              src={blog.image}
              alt={blog.title}
              borderRadius="10px"
              h={{ base: "300px", md: "400px" }}
              w="full"
              objectFit="fill"
            />

            {/* BLOG Description */}
            <Text
              fontSize="lg"
              mb="6"
              fontFamily="Verdana"
              textAlign="justify"
              mt="3"
            >
              {blog.content}
            </Text>

            {/* Additional Information */}
            <Flex alignItems="center" justifyContent="space-between" gap="5">
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="blue.600"
                fontFamily="Georgia"
              >
                {/* {blog.author} */} Ratings:
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
