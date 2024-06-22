import { Container, Text, VStack, Box, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_xxx", // Replace with your actual service ID
      "template_xxx", // Replace with your actual template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "bhasaworn@gmail.com" // Ensure the email is sent to the correct address
      },
      "user_xxx" // Replace with your actual user ID
    ).then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Quotation request sent successfully!");
    }).catch((err) => {
      console.error("FAILED...", err);
      alert("Failed to send quotation request. Please try again later.");
    });
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">EnTK Supply</Heading>
          <Text fontSize="lg">386/191 ถนนกาญจนาภิเษก แขวงดอกไม้ เขตประเวศ กทม. 10250</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Link to="/product-fire-alarm">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Fire Alarm Systems</Heading>
                <Text mt={4}>We provide state-of-the-art fire alarm systems to ensure safety and compliance with regulations.</Text>
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/product-cctv">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">CCTV</Heading>
                <Text mt={4}>Our CCTV solutions offer high-quality surveillance to protect your premises.</Text>
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/product-pa">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">PA Systems</Heading>
                <Text mt={4}>We offer professional PA systems for clear and effective communication.</Text>
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/product-electrical-low-voltage">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Electrical Low Voltage</Heading>
                <Text mt={4}>Our electrical low voltage solutions are designed for efficiency and reliability.</Text>
              </Box>
            </Link>
          </GridItem>
        </SimpleGrid>

        <Box p={5} shadow="md" borderWidth="1px" mt={10}>
          <Heading fontSize="xl" mb={4}>Request a Quotation</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="phone" mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" value={formData.phone} onChange={handleChange} />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea value={formData.message} onChange={handleChange} />
            </FormControl>
            <Button colorScheme="blue" type="submit">Submit</Button>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;