import { Box, Text, Spacer, Flex, Wrap, Heading, SimpleGrid, Stack, useBreakpointValue, Image, LinkBox, LinkOverlay, Tag } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  const column = useBreakpointValue({ base: "1", md: "2" });

  return (
    <Box id="projects">
      <Heading color="#507ca1" fontWeight="bold" fontSize="22px" paddingBottom="15px">
        Projects!
      </Heading>
      <SimpleGrid spacing="15px" columns={column}>
        <LinkBox bg="#ecebe6" rounded="6px" padding="15px">
          <Flex h="100%" direction="column">
            <Stack>
              <Box>
                <Image src="/redchair.png" boxSize="26px" display="inline-block" />
                <Text fontFamily="Domine" color="#5c5c5c" fontSize="16px" display="inline-block" paddingLeft="2px" position="relative" top="5px">
                  Chairside
                </Text>
              </Box>
              <Text fontSize="15px" lineHeight="tall">
                Designed, prototyped, and developed an application to facilitate from the table mobile ordering at restaurants
                <LinkOverlay isExternal href="https://eat.chairside.app" />
              </Text>
            </Stack>
            <Spacer padding="8px" />
            <Wrap shouldWrapChildren="true">
              <Tag bg="#f7f7f7" size="sm">
                JavaScript (ES6)
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                React.js
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                React Router
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                ChakraUI
              </Tag>
            </Wrap>
          </Flex>
        </LinkBox>

        <LinkBox bg="#ecebe6" rounded="6px" padding="15px">
          <Flex h="100%" direction="column">
            <Stack>
              <Heading fontFamily="Abril Fatface" fontWeight="normal" color="#47589b" fontSize="16px">
                SnapCopyPaste
                <LinkOverlay isExternal href="https://www.snapcopypaste.com" />
              </Heading>
              <Text fontSize="15px" lineHeight="tall">
                Designed and developed web app for text scanning & recognition with team for senior year capstone project
              </Text>
            </Stack>
            <Spacer padding="8px" />
            <Wrap shouldWrapChildren="true">
              <Tag bg="#f7f7f7" size="sm">
                JavaScript
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                HTML & CSS
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                Tesseract.js
              </Tag>
            </Wrap>
          </Flex>
        </LinkBox>

        <LinkBox bg="#ecebe6" rounded="6px" padding="15px">
          <Flex h="100%" direction="column">
            <Stack>
              <Heading color="#507ca1" fontSize="18px">
                Portfolio
                <LinkOverlay isExternal href="https://www.carlschultz.com"></LinkOverlay>
              </Heading>
              <Text fontSize="15px" fontWeight="normal"></Text>
            </Stack>
            <Spacer padding="8px" />
            <Wrap shouldWrapChildren="true">
              <Tag bg="#f7f7f7" size="sm">
                JavaScript (ES6)
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                React.js
              </Tag>
              <Tag bg="#f7f7f7" size="sm">
                ChakraUI
              </Tag>
            </Wrap>
          </Flex>
        </LinkBox>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
