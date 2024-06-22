import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const ProductPA = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">PA Systems</Heading>
          <Text fontSize="lg">We offer professional PA systems for clear and effective communication.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Product Details</Heading>
          <Text mt={4}>Here you can add detailed information about the PA systems, including features, specifications, and pricing.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProductPA;