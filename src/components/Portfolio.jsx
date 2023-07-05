import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

import { responsive, carusel, carusel2 } from "../helpers/const";

const Portfolio = () => {
  return (
    <Box w={"full"} bg={"#000"}>
      <Box textAlign={"center"}>
        <Center flexDir={"column"}>
          <Image w={"24px"} h={"24px"} src="/palette.png" />
          <Flex align={"center"} gap={1} pt={5}>
            <Box w={"140px"} h={"2px"} bg={"#fff"}></Box>
            <Box w={"2px"} h={"2px"} bg={"#fff"}></Box>
            <Box w={"5px"} h={"2px"} bg={"#fff"}></Box>
          </Flex>
        </Center>
        <Heading
          color={"#fff"}
          pt={5}
          pb={10}
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight={"700"}
          lineHeight={{ base: "34px", md: "44px" }}
          letterSpacing={"0.03em"}
          textAlign={"center"}
        >
          Bajarilgan loyihalardan misollar:
        </Heading>
      </Box>
      {/*  */}
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlaySpeed={3500}
        autoPlay={true}
        arrows={false}
      >
        {carusel.map((c, i) => (
          <Image key={i} src={c} />
        ))}
      </Carousel>
      <Carousel
        infinite={true}
        autoPlaySpeed={4000}
        autoPlay={true}
        responsive={responsive}
        arrows={false}
      >
        {carusel2.map((c, i) => (
          <Image key={i} src={c} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Portfolio;
