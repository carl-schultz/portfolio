import React from "react";
import { Box, Stack, useBreakpointValue, Container } from "@chakra-ui/react";
import Projects from "./Projects";
import Work from "./Work";
import Intro from "./Intro";
import Footer from "./Footer";
const Main = () => {
  const padding = useBreakpointValue({ base: "35px", md: "96px" });

  return (
    <Box>
      <Container maxW="48em" py={["20px", "40px", "90px"]} px={["20px"]}>
        <Box paddingBottom={padding}>
          <Intro />
        </Box>
        <Stack spacing="35px">
          <Work />
          <Projects />
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
