import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useColorMode} from "./color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const Navabar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={"4"} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r"
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button bg={"gray.700"} mx={4}>
              <CiSquarePlus fontSize={"20"} />
            </Button>

            <Button onClick={toggleColorMode} bg={"gray.700"}>
              {colorMode === "light" ? <LuMoon fontSize={"20"}/>: <LuSun fontSize={"20"}/>}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navabar;
