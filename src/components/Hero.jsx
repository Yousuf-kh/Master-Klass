import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box
      pt={{ base: 10, md: 20 }}
      w={"full"}
      backgroundImage={"url(/bg.png)"}
      minH={"499px"}
    >
      <Container maxW={"container.lg"}>
        <Box w={{ base: "full", md: "55%" }}>
          <Flex align={"center"} justify={"space-between"}>
            <Text
              px={2}
              bg={"#fff"}
              fontSize={{ base: "20px", md: "24px" }}
              fontWeight={"300"}
            >
              20-21-22-iyun
            </Text>
            <Flex align={"center"} gap={5}>
              <Flex align={"center"} gap={1}>
                <Text
                  color={"#5B6375"}
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight={"300"}
                >
                  20:00
                </Text>
                <Image src="/clock.png" />
              </Flex>
              <Button
                size={{ base: "sm", md: "md" }}
                bg={"#EF3833"}
                color={"#fff"}
                borderRadius={"20px"}
              >
                ONLINE
              </Button>
            </Flex>
          </Flex>
          <Heading
            fontSize={{ base: "30px", md: "80px" }}
            fontWeight={"700"}
            letterSpacing={"0.02em"}
            color={"#FFFFFF"}
          >
            Grafik Dizayn
          </Heading>
          <Text
            color={"#FFFFFF"}
            fontSize={{ base: "25px", md: "40px" }}
            fontWeight={"300"}
            letterSpacing={{ base: "7px", md: "10px" }}
          >
            SOHASIGA KIRISH
          </Text>
          <Flex pt={{ base: "270px", md: "0" }} align={"center"} gap={3}>
            <Image src="/zap.png" />
            <Box>
              <Text
                color={"#FFFFFF"}
                fontWeight={"300"}
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight={"26px"}
              >
                Ismoil Mahmudjonovdan
                <br />
                <Box as={"span"} fontWeight={"700"}>
                  Bepul Master-Klass
                </Box>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
