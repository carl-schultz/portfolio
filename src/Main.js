import React from "react";
import { Box, Center, SimpleGrid, Stack, useBreakpointValue, GridItem } from "@chakra-ui/react";
import Projects from "./Projects";
import Work from "./Work";
import Intro from "./Intro";
import Links from "./Links";
import Skills from "./Skills";
import Footer from "./Footer";
const Main = () => {
  const column = useBreakpointValue({ base: "1", md: "2" });
  const padding = useBreakpointValue({ base: "20px", md: "96px" });
  const paddingWork = useBreakpointValue({ base: "0px", md: "20px" });
  const float = useBreakpointValue({ base: "left", md: "right" });

  return (
    <Box paddingTop={padding}>
      <Center>
        <SimpleGrid columns={column} spacing="0px" width="48em" margin="20px">
          <Intro />
          <GridItem>
            <Stack float={float}>
              <Links />
              <Skills />
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Center>
      <Center>
        <Stack spacing="35px" paddingTop={paddingWork} width="48em" margin="20px">
          <Work />
          <Projects />
        </Stack>
      </Center>
      <Footer />
    </Box>
  );
};

export default Main;
