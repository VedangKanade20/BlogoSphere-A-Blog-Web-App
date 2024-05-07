import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "xl" }) => {
  return (
    <Flex
      direction="column"
      boxShadow="md"
      rounded="md"
      bgColor="wheat"
      p="10"
      width={width}
    >
      {children}
    </Flex>
  );
};

export default FormContainer;
