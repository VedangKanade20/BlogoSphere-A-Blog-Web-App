import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link as RouterLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5">
      <FormContainer>
        <Heading as="h1" mb="8" fontSize="3xl">
          Login
        </Heading>

        {error && <Message type="error">{error}</Message>}

        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="username@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="password">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" mt="4" isLoading={loading}>
            Login
          </Button>
        </form>

        <Flex pt="10">
          <Text fontWeight="semibold">
            New Customer?{" "}
            <Link as={RouterLink} to="/register">
              Click here to register
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default LoginScreen;
