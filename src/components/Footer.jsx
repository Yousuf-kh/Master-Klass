import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box w={"full"} bg={"#000"} h={"60px"}>
      <Container maxW={"container.lg"}>
        <Flex
          align={"center"}
          h={"60px"}
          justify={{ base: "center", md: "space-between" }}
        >
          <Flex display={{ base: "none", md: "flex" }} align={"center"} gap={2}>
            <Image src="/logo.png" />
            <Text
              color={"#fff"}
              fontSize={"12px"}
              fontWeight={"400"}
              lineHeight={"13px"}
            >
              3 yildan ortiq tajribaga ega
              <br /> grafik dizayner
            </Text>
          </Flex>

          <Flex align={"center"} gap={10}>
            <Flex align={"center"} gap={2}>
              <Image src="/insta.png" />
              <Image src="/telegram.png" />
              <Image src="/youtube.png" />
            </Flex>
            <Flex display={{ base: "none", md: "flex" }} align={"center"}>
              <Box>
                <Text color={"#414157"} fontSize={"14px"} fontWeight={"400"}>
                  Biz bilan bog’laning:
                </Text>
                <Text color={"#fff"} fontSize={"16px"} fontWeight={"400"}>
                  +998 99 821 33 91
                </Text>
              </Box>
              <Image w={"30px"} h={"30px"} src="/smartphone.png" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
