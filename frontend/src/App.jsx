import { Box } from "@chakra-ui/react";
import React from "react";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navabar from "./components/ui/Navabar";
import { Route, Routes } from "react-router-dom";
import { useColorModeValue } from "./components/ui/color-mode";

const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}>
      <Navabar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
};

export default App;
