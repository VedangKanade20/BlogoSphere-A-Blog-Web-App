import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiTrendingUp } from "react-icons/hi";
import { RiLoginCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import HeaderMenuItem from "./HeaderMenuItem";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="teal.700"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
      zIndex="9999"
      shadow="lg"
    >
      <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
        <Heading
          as="h1"
          color="#fff"
          fontWeight="bold"
          fontSize="30px"
          letterSpacing="wide"
          fontFamily="M PLUS Rounded 1c"
          _hover={{ textDecor: "none", color: "black" }}
        >
          BlogoSphere
        </Heading>
      </Link>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="#444" w="6" h="6" />
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "3", md: "0" }}
      >
        <HeaderMenuItem
          url="/trendingBlogs"
          label="Trending"
          icon={<Icon as={HiTrendingUp} mr="1" w="6" h="6" color="green" />}
        />

        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaCircleChevronDown />}
              _hover={{ textDecor: "none", opacity: "0.8" }}
            >
              {userInfo.name}
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/userProfile">
                Update Profile
              </MenuItem>

              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <HeaderMenuItem
            url="/login"
            label="Login"
            icon={
              <Icon as={RiLoginCircleFill} mr="1" w="6" h="6" color="green" />
            }
          />
        )}
      </Box>
    </Flex>
  );
};

export default Header;
