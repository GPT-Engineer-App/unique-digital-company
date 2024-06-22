import { Container, Text, VStack, Box, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">EnTK Supply</Heading>
          <Text fontSize="lg">386/191 ถนนกาญจนาภิเษก แขวงดอกไม้ เขตประเวศ กทม. 10250</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Fire Alarm Systems</Heading>
              <Text mt={4}>We provide state-of-the-art fire alarm systems to ensure safety and compliance with regulations.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">CCTV</Heading>
              <Text mt={4}>Our CCTV solutions offer high-quality surveillance to protect your premises.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">PA Systems</Heading>
              <Text mt={4}>We offer professional PA systems for clear and effective communication.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Electrical Low Voltage</Heading>
              <Text mt={4}>Our electrical low voltage solutions are designed for efficiency and reliability.</Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;