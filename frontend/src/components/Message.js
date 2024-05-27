import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Message = ({ type = "info", children }) => {
  return (
    <Alert status={type}>
      <AlertIcon />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
};

export default Message;

// import { useToast } from '@chakra-ui/react';
// import { useEffect } from 'react';

// const Message = ({ type = 'info', children }) => {
//   const toast = useToast();

//   useEffect(() => {
//     toast({
//       title: children,
//       status: type,
//       duration: 5000,
//       isClosable: true,
//     });
//   }, [children, type, toast]);

//   return null; // Return null since the toast will handle the UI
// };

// export default Message;
