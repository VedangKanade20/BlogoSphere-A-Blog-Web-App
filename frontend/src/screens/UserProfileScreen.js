// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Grid,
//   Heading,
//   Input,
//   Link,
//   Spacer,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link as RouterLink, useNavigate } from "react-router-dom";

// import { getUserDetails, updateUserProfile } from "../actions/userActions";
// import FormContainer from "../components/FormContainer";
// import Message from "../components/Message";

// const UserProfileScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const userDetails = useSelector((state) => state.userDetails);
//   const { loading, error, user } = userDetails;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
//   const { success } = userUpdateProfile;

//   useEffect(() => {
//     if (!userInfo) {
//       navigate("/login");
//     } else {
//       if (!user.name) {
//         dispatch(getUserDetails());
//       } else {
//         setName(user.name);
//         setEmail(user.email);
//       }
//     }
//   }, [dispatch, navigate, user, userInfo, success]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//     } else {
//       dispatch(updateUserProfile({ id: user._id, name, email, password }));
//       // window.location.reload();
//     }
//   };

//   return (
//     <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} py="5" gap="10">
//       <Flex w="full" alignItems="center" justifyContent="center" py="5">
//         <FormContainer>
//           <Heading as="h1" mb="8" fontSize="3xl">
//             User Profile
//           </Heading>

//           {error && <Message type="error">{error}</Message>}
//           {message && <Message type="error">{message}</Message>}

//           <form onSubmit={submitHandler}>
//             <FormControl id="name">
//               <FormLabel htmlFor="name">Your Name</FormLabel>
//               <Input
//                 id="name"
//                 type="text"
//                 placeholder="Your full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormControl>

//             <Spacer h="3" />

//             <FormControl id="email">
//               <FormLabel htmlFor="email">Email address</FormLabel>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="username@domain.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormControl>

//             <Spacer h="3" />

//             <FormControl id="password">
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="************"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormControl>

//             <Spacer h="3" />

//             <FormControl id="confirmPassword">
//               <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
//               <Input
//                 id="confirmPassword"
//                 type="password"
//                 placeholder="************"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormControl>

//             <Button type="submit" colorScheme="teal" mt="4" isLoading={loading}>
//               Update
//             </Button>
//           </form>
//         </FormContainer>
//       </Flex>
//     </Grid>
//   );
// };

// export default UserProfileScreen;

// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Grid,
//   Heading,
//   Input,
//   Spacer,
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { getUserDetails, updateUserProfile } from "../actions/userActions";
// import FormContainer from "../components/FormContainer";
// import Message from "../components/Message";

// const UserProfileScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const userDetails = useSelector((state) => state.userDetails);
//   const { loading, error, user } = userDetails;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
//   const { success } = userUpdateProfile;

//   useEffect(() => {
//     if (!userInfo) {
//       navigate("/login");
//     } else {
//       if (!user.name) {
//         dispatch(getUserDetails());
//       } else {
//         setName(user.name);
//         setEmail(user.email);
//       }
//     }
//   }, [dispatch, navigate, user, userInfo, success]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//     } else {
//       dispatch(updateUserProfile({ id: user._id, name, email, password }));
//       // window.location.reload();
//     }
//   };

//   return (
//     <Grid templateColumns={{ base: "1fr", md: "1fr" }} py="5" gap="10">
//       <Flex w="full" alignItems="center" justifyContent="center" py="5">
//         <FormContainer>
//           <Heading as="h1" mb="8" fontSize="3xl">
//             User Profile
//           </Heading>

//           {error && <Message type="error">{error}</Message>}
//           {message && <Message type="error">{message}</Message>}

//           <form onSubmit={submitHandler}>
//             <FormControl id="name">
//               <FormLabel htmlFor="name">Your Name</FormLabel>
//               <Input
//                 id="name"
//                 type="text"
//                 placeholder="Your full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormControl>

//             <Spacer h="3" />

//             <FormControl id="email">
//               <FormLabel htmlFor="email">Email address</FormLabel>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="username@domain.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormControl>

//             <Spacer h="3" />

//             <FormControl id="password">
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="************"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormControl>

//             <Spacer h="3" />

//             <FormControl id="confirmPassword">
//               <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
//               <Input
//                 id="confirmPassword"
//                 type="password"
//                 placeholder="************"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormControl>

//             <Button type="submit" colorScheme="teal" mt="4" isLoading={loading}>
//               Update
//             </Button>
//           </form>
//         </FormContainer>
//       </Flex>
//     </Grid>
//   );
// };

// export default UserProfileScreen;

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserDetails, updateUserProfile } from "../actions/userActions";
import Message from "../components/Message";

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, user, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      // window.location.reload();
    }
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr" }}
      py={{ base: "5", md: "10" }}
      gap={{ base: "5", md: "10" }}
      px={{ base: "4", md: "0" }}
    >
      <Flex w="full" alignItems="center" justifyContent="center" py="5">
        <Box
          w={{ base: "100%", md: "60%" }}
          bg="white"
          p={{ base: "4", md: "8" }}
          borderRadius="md"
          boxShadow="md"
        >
          <Heading as="h1" mb="8" fontSize={{ base: "2xl", md: "3xl" }}>
            User Profile
          </Heading>

          {error && <Message type="error">{error}</Message>}
          {message && <Message type="error">{message}</Message>}

          <form onSubmit={submitHandler}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <Spacer h="3" />

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="username@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <Spacer h="3" />

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Spacer h="3" />

            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              mt="4"
              isLoading={loading}
              w="50"
            >
              Update
            </Button>
          </form>
        </Box>
      </Flex>
    </Grid>
  );
};

export default UserProfileScreen;
