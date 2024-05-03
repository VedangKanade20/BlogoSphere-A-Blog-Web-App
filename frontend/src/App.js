import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogPostScreen from "./screens/BlogPostScreen";
import HomeScreen from "./screens/HomeScreen";
import SingleBlogScreen from "./screens/SingleBlogScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="6"
        px="6"
        bgColor="#FFFFFF"
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/blog/:id" element={<SingleBlogScreen />} />
          <Route path="/postBlog" element={<BlogPostScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
