import React from "react";
import { useBreakpointValue, Link, HStack } from "@chakra-ui/react";

const Links = () => {
  const display = useBreakpointValue({ base: "none", md: "block" });
  return (
    <HStack spacing="30px" display={display} paddingBottom="28px" paddingTop="5px">
      <Link fontFamily="crimson text" fontSize="22px" fontStyle="italic" color="grey">
        Work
      </Link>
      <Link fontFamily="crimson text" fontSize="22px" fontStyle="italic" color="grey">
        Projects
      </Link>
      <Link fontFamily="crimson text" fontSize="22px" fontStyle="italic" color="grey">
        Not Work
      </Link>
    </HStack>
  );
};

export default Links;
