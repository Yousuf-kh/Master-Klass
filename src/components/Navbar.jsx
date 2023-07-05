import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box w={"full"} bg={"#0E0E18"} h={"60px"}>
      <Container maxW={"container.lg"}>
        <Flex justify={"space-between"} align={"center"} h={"60px"}>
          <Flex align={"center"} gap={2}>
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
      </Container>
    </Box>
  );
};

export default Navbar;
