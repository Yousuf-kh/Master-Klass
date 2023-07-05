import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { aboutText } from "../helpers/const";

const About = () => {
  return (
    <Box w={"full"} bg={"#0E0E18"} py={"50px"}>
      <Container maxW={"container.lg"}>
        <Flex align={"center"} gap={2}>
          <Image w={"24px"} h={"24px"} src="/receipt.png" />
          <Flex align={"center"} gap={1}>
            <Box w={"140px"} h={"2px"} bg={"#fff"}></Box>
            <Box w={"2px"} h={"2px"} bg={"#fff"}></Box>
            <Box w={"5px"} h={"2px"} bg={"#fff"}></Box>
          </Flex>
        </Flex>

        <Box pt={5}>
          <Heading
            fontSize={{ base: "30px", md: "40px" }}
            fontWeight={"300"}
            lineHeight={{ base: "34px", md: "44px" }}
            letterSpacing={"0.03em"}
            color={"#fff"}
          >
            ISMOIL MAHMUDJONOV
          </Heading>
          <Heading
            fontSize={{ base: "30px", md: "40px" }}
            fontWeight={"700"}
            lineHeight={"44px"}
            color={"#fff"}
            letterSpacing={"0.03em"}
          >
            HAQIDA
          </Heading>
        </Box>

        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={5}
          pt={10}
        >
          {aboutText.map((c, i) => (
            <Box
              borderRadius={"5px"}
              pos={"relative"}
              p={(5, 10)}
              mt={{ base: 5, md: 0 }}
              bg={"#fff"}
              key={i}
            >
              <Image
                p={5}
                bg={"#fff"}
                borderRadius={"100%"}
                src={c.img}
                pos={"absolute"}
                top={"-7"}
                right={"5"}
                boxShadow={"0px 4px 16px 0px rgba(0, 0, 0, 0.25)"}
              />
              <Text
                fontSize={"18px"}
                fontWeight={"500"}
                lineHeight={"22px"}
                letterSpacing={"0.03.em"}
              >
                {c.text}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
