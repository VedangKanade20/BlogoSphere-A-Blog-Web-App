import { Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HeaderMenu = ({ label, url, icon }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      textTransform="uppercase"
      mr="5"
      display="flex"
      alignItems="center"
      color="whiteAlpha.700"
      _hover={{ textDecor: "none", color: "white" }}
    >
      <Icon as={icon} mr="1" w="4" h="4" />
      {label}
    </Link>
  );
};

export default HeaderMenu;
