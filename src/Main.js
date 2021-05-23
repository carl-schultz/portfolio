import React from "react";
import { Box, Text, Center, SimpleGrid, Stack, useBreakpointValue, Link, HStack, GridItem } from "@chakra-ui/react";

import "@fontsource/crimson-text";

const Main = () => {
  const column = useBreakpointValue({ base: "1", md: "2" });
  const display = useBreakpointValue({ base: "none", md: "block" });
  const padding = useBreakpointValue({ base: "20px", md: "96px" });

  return (
    <Box paddingTop={padding} height="100vh" bg="#f7f7f7">
      <Center>
        <SimpleGrid columns={column} spacing={10} width="48em" margin="20px">
          <Stack spacing="0px">
            <Text align="left" color="grey" fontFamily="Crimson Text" fontSize="34px" fontWeight="bold">
              Carl Schultz
            </Text>
            <Text fontFamily="Quicksand" fontSize="15px">
              test
            </Text>
          </Stack>

          <GridItem align="right">
            <HStack spacing="30px" justify="right" display={display}>
              <Link fontSize="22px" fontStyle="italic" color="grey" fontFamily="Crimson Text">
                Work
              </Link>
              <Link fontSize="22px" fontStyle="italic" color="grey" fontFamily="Crimson Text">
                Projects
              </Link>
              <Link fontSize="22px" fontStyle="italic" color="grey" fontFamily="Crimson Text">
                Art
              </Link>
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Main;
