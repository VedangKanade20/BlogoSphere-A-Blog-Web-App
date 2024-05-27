import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "xl" }) => {
  return (
    <Flex
      direction="column"
      boxShadow="md"
      rounded="md"
      bgColor="grey.200"
      p="10"
      width={width}
    >
      {children}
    </Flex>
  );
};

export default FormContainer;
