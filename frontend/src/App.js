import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="6"
        px="6"
        bgColor="gray.200"
      >
        <HomeScreen />
      </Flex>
      <Footer />
    </div>
  );
}

export default App;
