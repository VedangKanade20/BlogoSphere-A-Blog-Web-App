// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Link,
//   Spacer,
// } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
// import {
//   BLOG_UPDATE_RESET,
//   BLOG_UPDATE_SUCCESS,
// } from "../constants/blogConstants";
// import { listBlogDetails, updateBlog } from "../actions/blogActions";
// import FormContainer from "../components/FormContainer";
// import Loader from "../components/Loader";
// import Message from "../components/Message";

// const EditBlogScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { id: blogId } = useParams();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");

//   const blogDetails = useSelector((state) => state.blogDetails);
//   const { loading, error, blog } = blogDetails;

//   const blogUpdate = useSelector((state) => state.blogUpdate);
//   const {
//     loading: loadingUpdate,
//     error: errorUpdate,
//     success: successUpdate,
//   } = blogUpdate;

//   useEffect(() => {
//     if (successUpdate) {
//       dispatch({ type: BLOG_UPDATE_RESET });
//       navigate(`/`);
//     } else {
//       if (!blog.name || blog._id !== blogId) {
//         dispatch(listBlogDetails(blogId));
//       } else {
//         setTitle(blog.title);
//         setContent(blog.content);
//         setImage(blog.image);
//       }
//     }
//   }, [dispatch, navigate, blogId, blog, successUpdate]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (blogId) {
//       dispatch(
//         updateBlog({
//           _id: blogId,
//           title,
//           content,
//           image,
//         })
//       );
//     } else {
//       console.error("Blog ID is undefined");
//     }
//   };

//   const uploadFileHandler = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       };

//       const { data } = await axios.post(`/api/uploads`, formData, config);
//       setImage(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <Link as={RouterLink} to="/blogs/:id">
//         Go Back
//       </Link>

//       <Flex w="full" alignItems="center" justifyContent="center" py="5">
//         <FormContainer>
//           <Heading as="h1" mb="8" fontSize="3xl">
//             Edit Blog
//           </Heading>

//           {loadingUpdate && <Loader />}
//           {errorUpdate && <Message type="error">{errorUpdate}</Message>}

//           {loading ? (
//             <Loader />
//           ) : error ? (
//             <Message type="error"></Message>
//           ) : (
//             <form onSubmit={submitHandler}>
//               {/* Name */}
//               <FormControl id="title" isRequired>
//                 <FormLabel>Title</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter Title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </FormControl>
//               <Spacer h="3" />

//               {/* CONTENT */}
//               <FormControl id="content" isRequired>
//                 <FormLabel>Content</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter Content"
//                   value={content}
//                   onChange={(e) => setContent(e.target.value)}
//                 />
//               </FormControl>
//               <Spacer h="3" />

//               {/* IMAGE */}
//               <FormControl id="image" isRequired>
//                 <FormLabel>Image</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter image url"
//                   value={image}
//                   onChange={(e) => setImage(e.target.value)}
//                 />
//                 <Input type="file" onChange={uploadFileHandler} />
//               </FormControl>
//               <Spacer h="3" />

//               <Button
//                 type="submit"
//                 isLoading={loading}
//                 colorScheme="teal"
//                 mt="4"
//               >
//                 Update
//               </Button>
//             </form>
//           )}
//         </FormContainer>
//       </Flex>
//     </>
//   );
// };

// export default EditBlogScreen;

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { BLOG_UPDATE_RESET } from "../constants/blogConstants";
import { listBlogDetails, updateBlog } from "../actions/blogActions";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

const EditBlogScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogId } = useParams();

  console.log("blogId from URL:", blogId); // Log blogId early

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogUpdate;

  useEffect(() => {
    console.log("blogId in useEffect:", blogId); // Log blogId in useEffect
    if (successUpdate) {
      dispatch({ type: BLOG_UPDATE_RESET });
      navigate(`/`);
    } else {
      if (!blog.title || blog._id !== blogId) {
        if (blogId) {
          dispatch(listBlogDetails(blogId));
        } else {
          console.error("blogId is undefined");
        }
      } else {
        setTitle(blog.title);
        setContent(blog.content);
        setImage(blog.image);
      }
    }
  }, [dispatch, navigate, blogId, blog, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (blogId) {
      console.log("Submitting blog with ID:", blogId); // Log blogId before dispatching action
      dispatch(
        updateBlog({
          _id: blogId,
          title,
          content,
          image,
        })
      );
    } else {
      console.error("Blog ID is undefined during submission");
    }
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`/api/uploads`, formData, config);
      setImage(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link as={RouterLink} to={`/blogs/${blogId}`}>
        Go Back
      </Link>

      <Flex w="full" alignItems="center" justifyContent="center" py="5">
        <FormContainer>
          <Heading as="h1" mb="8" fontSize="3xl">
            Edit Blog
          </Heading>

          {loadingUpdate && <Loader />}
          {errorUpdate && <Message type="error">{errorUpdate}</Message>}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message type="error">{error}</Message>
          ) : (
            <form onSubmit={submitHandler}>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <Spacer h="3" />

              <FormControl id="content" isRequired>
                <FormLabel>Content</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </FormControl>
              <Spacer h="3" />

              <FormControl id="image" isRequired>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <Input type="file" onChange={uploadFileHandler} />
              </FormControl>
              <Spacer h="3" />

              <Button
                type="submit"
                isLoading={loading}
                colorScheme="teal"
                mt="4"
              >
                Update
              </Button>
            </form>
          )}
        </FormContainer>
      </Flex>
    </>
  );
};

export default EditBlogScreen;
