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
import { HiOutlineMenuAlt3, HiTrendingUp } from "react-icons/hi";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import HeaderMenuItem from "./HeaderMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { IoChevronDown } from "react-icons/io5";

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
      bgColor="#F5F5F5"
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
          color="#1c1c50"
          fontWeight="bold"
          fontSize="25px"
          letterSpacing="wide"
          fontFamily="Arial Black"
        >
          Blogosphere
        </Heading>
      </Link>

      {/* Hambuger Menu  */}
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="#444" w="6" h="6" />
      </Box>

      {/* MENU */}
      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "3", md: "0" }}
      >
        <HeaderMenuItem
          url="/trendingBlogs"
          label="Trending Blogs"
          icon={<Icon as={HiTrendingUp} mr="1" w="6" h="6" color="green" />}
        />

        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecor: "none", opacity: "0.7" }}
            >
              {userInfo.name}
            </MenuButton>

            <MenuList>
              <MenuItem as={RouterLink} to="/userProfile">
                Profile
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
