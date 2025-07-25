import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const CreatePage = () => {
  const [ newProduct, setNewProduct ] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct);
    
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack m={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={4}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack borderSpacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button bg={"blue.300"} onClick={handleAddProduct} w="full">
              Add Product
              </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
