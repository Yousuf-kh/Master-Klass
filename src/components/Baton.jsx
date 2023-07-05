import { Button } from "@chakra-ui/react";

const Baton = ({ children }) => {
  return (
    <Button
      color={"#fff"}
      borderRadius={"20px"}
      px={10}
      bg={"#45CCFF"}
      size={{ base: "sm", md: "md" }}
    >
      {children}
    </Button>
  );
};

export default Baton;
