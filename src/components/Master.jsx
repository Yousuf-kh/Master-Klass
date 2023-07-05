import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { master } from "../helpers/const";
import Baton from "./Baton";

const Master = () => {
  return (
    <Box w={"full"} bg={"#000"} py={"50px"}>
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
            fontWeight={"700"}
            lineHeight={{ base: "34px", md: "44px" }}
            letterSpacing={"0.03em"}
            color={"#fff"}
          >
            3 kunlik Master-Klassda
          </Heading>
          <Heading
            fontSize={{ base: "30px", md: "40px" }}
            fontWeight={"300"}
            lineHeight={"44px"}
            color={"#fff"}
            letterSpacing={"0.03em"}
          >
            siz quyidagi bilimlarga ega bo’lasiz:
          </Heading>
        </Box>

        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={6}
          pt={20}
          rowGap={20}
        >
          {master.map((c, i) => (
            <Box pos={i === 3 ? "relative" : ""} key={i}>
              <Flex gap={3} align={"center"}>
                <Image src="/check.png" />
                <Text
                  fontSize={"18px"}
                  fontWeight={"300"}
                  lineHeight={"22px"}
                  letterSpacing={"0.03em"}
                  color={"#fff"}
                >
                  {c}
                </Text>
                <Image
                  pos={"absolute"}
                  right={"0"}
                  src="/podarok.png"
                  display={i === 3 ? "block" : "none"}
                />
              </Flex>
            </Box>
          ))}
          <Box>
            <Text
              fontSize={"24px"}
              fontWeight={"700"}
              lineHeight={"26px"}
              letterSpacing={"0.03em"}
              color={"#45CCFF"}
              mb={2}
            >
              BEPUL{" "}
              <Box
                textDecor={""}
                as={"span"}
                color={"#fff"}
                fontWeight={"300"}
                textDecoration={"line-through"}
              >
                300.000 SO'M
              </Box>
            </Text>
            <Baton>ISHTIROK ETISH</Baton>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Master;
