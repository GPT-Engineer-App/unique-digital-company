import { Container, Text, VStack, Box, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";

const ProductFireAlarm = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Fire Alarm Systems</Heading>
          <Text fontSize="lg">Our state-of-the-art fire alarm systems ensure safety and compliance with regulations.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Simplex Fire Alarm Models</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="lg">Simplex 4100ES</Heading>
                <Text mt={4}>The Simplex 4100ES is a high-capacity, networkable fire alarm control panel designed for large facilities.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="lg">Simplex 4010ES</Heading>
                <Text mt={4}>The Simplex 4010ES is a versatile fire alarm control panel suitable for medium-sized buildings.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="lg">Simplex 4007ES</Heading>
                <Text mt={4}>The Simplex 4007ES is a compact fire alarm control panel ideal for small to medium-sized facilities.</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Notifier Fire Alarm Control Panels</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="lg">Notifier NFS3030</Heading>
                <Text mt={4}>The Notifier NFS3030 is a powerful fire alarm control panel designed for large-scale applications.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="lg">Notifier NFS320</Heading>
                <Text mt={4}>The Notifier NFS320 is a reliable fire alarm control panel suitable for small to medium-sized buildings.</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProductFireAlarm;