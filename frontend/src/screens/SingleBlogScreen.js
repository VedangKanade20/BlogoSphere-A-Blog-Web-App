import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Select,
  Text,
  Textarea,
  IconButton,
  Divider,
  Link,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import {
  createBlogReview,
  deleteBlog,
  listBlogDetails,
} from "../actions/blogActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { BLOG_REVIEW_CREATE_RESET } from "../constants/blogConstants";

const SingleBlogScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const blogReviewCreate = useSelector((state) => state.blogReviewCreate);
  const { success: successBlogReview, error: errorBlogReview } =
    blogReviewCreate;

  useEffect(() => {
    if (successBlogReview) {
      alert("Review Submitted");
      setRating(1);
      setComment("");
      setName("");
      dispatch({ type: BLOG_REVIEW_CREATE_RESET });
    }
    dispatch(listBlogDetails(id));
  }, [id, dispatch, successBlogReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBlogReview(id, { rating, comment, name }));
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
      navigate(`/`);
    }
  };

  return (
    <Flex direction="column" alignItems="center" mt="6">
      {/* Go Back Button */}
      <Button
        as={RouterLink}
        to="/"
        size="sm"
        colorScheme="teal"
        border="1px solid #fff"
        fontFamily="Teko"
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
        <>
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
                borderRadius="15px"
                h={{ base: "300px", md: "500px" }}
                w="full"
                objectFit="cover"
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

              <Divider />
              {/* Additional Information */}
              <Flex
                justifyContent="space-between"
                direction="column"
                gap="5"
                w="full"
              >
                <Text fontSize="17px" color="#000" fontFamily="Verdana">
                  Blog created by:
                  <u> {blog.author && blog.author.name}</u>
                </Text>
                <Text fontSize="17px" color="#000" fontFamily="Verdana">
                  Author:
                  <Link
                    fontSize="17px"
                    href={`mailto:${blog.author && blog.author.email}`}
                  >
                    {blog.author && blog.author.email}
                  </Link>
                </Text>

                {/* Conditionally render Delete Button */}
                <Flex
                  justifyContent={{
                    sm: "center",
                    base: "center",
                    md: "space-between",
                  }}
                  direction={{ sm: "column", base: "column", md: "row" }}
                  gap={{ sm: "2", base: 4, md: 10 }}
                  w={{ sm: "full", base: "100%", md: "full" }}
                >
                  {blog.author && blog.author.email === userInfo?.email ? (
                    <IconButton
                      aria-label="Delete"
                      icon={<MdDelete />}
                      colorScheme="gray"
                      w="300px"
                      h="50px"
                      _hover={{
                        textDecor: "none",
                        bgColor: "red",
                        fontWeight: "bolder",
                        shadow: "lg",
                        transform: "translateY(-10px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onClick={() => deleteHandler(blog._id)}
                    />
                  ) : (
                    <Text>Can only be deleted by Author</Text>
                  )}

                  {blog.author && blog.author.email === userInfo?.email ? (
                    <IconButton
                      aria-label="Edit"
                      icon={<FaEdit />}
                      colorScheme="gray"
                      // size="800px"
                      w="300px"
                      h="50px"
                      _hover={{
                        textDecor: "none",
                        bgColor: "beige",
                        fontWeight: "bolder",
                        shadow: "lg",
                        transform: "translateY(-10px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onClick={() => {
                        navigate(`/editBlog/${id}`);
                      }}
                    />
                  ) : (
                    <Text>Can only be edited by Author</Text>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Grid>
          <Box
            p="10"
            bgColor="white"
            rounded="md"
            mt="10"
            borderColor="gray.300"
            w="full"
          >
            <Heading as="h3" size="lg" mb="6">
              Write a review
            </Heading>

            {blog && blog.reviews?.length === 0 && (
              <Message>No Reviews</Message>
            )}

            {blog && blog.reviews?.length !== 0 && (
              <Box p="4" bgColor="white.900" rounded="md" mb="1" mt="5">
                {blog?.reviews?.map((review) => (
                  <Flex direction="column" key={review._id} mb="5" w="full">
                    <Flex justifyContent="space-between">
                      <Text fontSize="lg">
                        <strong>{review.name}</strong>
                      </Text>
                      <Rating value={review.rating} />
                    </Flex>
                    <Text mt="2">{review.comment}</Text>
                  </Flex>
                ))}
              </Box>
            )}

            {errorBlogReview && (
              <Message type="error">{errorBlogReview}</Message>
            )}

            {userInfo ? (
              <form onSubmit={submitHandler}>
                <FormControl id="rating" mb="3">
                  <FormLabel>Rating</FormLabel>
                  <Select
                    placeholder="Select Option"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Okay</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Select>
                </FormControl>

                <FormControl id="comment" mb="3">
                  <FormLabel>Comment:</FormLabel>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></Textarea>
                </FormControl>

                <FormControl id="name" mb="3">
                  <FormLabel>
                    Your name: (To verify this is not a Robot 🤖)
                  </FormLabel>
                  <Textarea
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Textarea>
                </FormControl>

                <Button colorScheme="teal" type="submit">
                  Post Review
                </Button>
              </form>
            ) : (
              <Message>Please login to write a review</Message>
            )}
          </Box>
        </>
      )}
    </Flex>
  );
};

export default SingleBlogScreen;
