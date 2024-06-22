import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const ProductFireAlarm = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Fire Alarm Systems</Heading>
          <Text fontSize="lg">Our state-of-the-art fire alarm systems ensure safety and compliance with regulations.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Product Details</Heading>
          <Text mt={4}>Here you can add detailed information about the fire alarm systems, including features, specifications, and pricing.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProductFireAlarm;