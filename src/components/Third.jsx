import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { third } from "../helpers/const";
import Baton from "./Baton";

const Third = () => {
  return (
    <Box w={"full"} bg={"#0E0E18"} py={5}>
      <Container maxW={"container.lg"}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-end" }}
          justify={"space-between"}
        >
          <Box>
            <Heading
              fontSize={"24px"}
              fontWeight={"700"}
              lineHeight={"26px"}
              letterSpacing={"0.03em"}
              color={"#63CDF6"}
              mb={4}
            >
              3 kunlik Master-Klassda siz:
            </Heading>
            {third.map((c, i) => (
              <Flex gap={2} align={"center"} py={1}>
                <Image src="/pocket.png" />
                <Text
                  fontSize={"18px"}
                  fontWeight={"300"}
                  lineHeight={"26px"}
                  letterSpacing={"0.03e"}
                  color={"#fff"}
                >
                  {c}
                </Text>
              </Flex>
            ))}
          </Box>
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Third;
