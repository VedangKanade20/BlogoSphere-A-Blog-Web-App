import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HeaderMenuItem = ({ url, label, icon }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="md"
      letterSpacing="wide"
      textTransform="capitalize"
      mr="5"
      display="flex"
      alignItems="center"
      color="white"
      fontWeight="bold"
      mb={{ base: "2", md: 0 }}
      _hover={{ textDecor: "none", color: "black" }}
    >
      {icon}
      {label}
    </Link>
  );
};

export default HeaderMenuItem;
