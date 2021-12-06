import React from "react";
import { Box, Text, Center, Stack, useBreakpointValue, HStack, Icon, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  const footerOrientation = useBreakpointValue({ base: "column", md: "row" });
  const footerAlign = useBreakpointValue({ base: "center", md: "" });
  const footerSpacing = useBreakpointValue({ base: "20px", md: "70px" });

  return (
    <Box width="full" bg="#507ca1" height="300px" position="absolute">
      <Center h="300px">
        <Stack direction={footerOrientation} w="80%" spacing={footerSpacing} justify="center">
          <Stack align={footerAlign}>
            <Text fontFamily="system-ui" fontWeight="bold" fontSize="14px" color="white">
              Carl Schultz
            </Text>
            <Text fontFamily="system-ui" fontWeight="bold" fontSize="14px" color="white" position="relative" bottom="8px">
              Software Engineer
            </Text>
          </Stack>
          <Stack align={footerAlign}>
            <Text fontFamily="system-ui" fontWeight="bold" fontSize="14px" color="#f7f7f7">
              Cleveland, OH
            </Text>
            <Text fontFamily="system-ui" fontWeight="bold" fontSize="14px" color="#f7f7f7" position="relative" bottom="8px">
              44102
            </Text>
          </Stack>
          <Center>
            <Stack align={footerAlign}>
              <Text as="a" href="mailto:carlvschultz@gmail.com" fontFamily="system-ui" fontWeight="bold" fontSize="14px" color="#f7f7f7">
                carlvschultz@gmail.com
              </Text>
            </Stack>
          </Center>
          <HStack spacing="40px" justify="center" bg="#507ca1">
            <LinkBox w="20px" h="20px" bg="#507ca1">
              <Icon as={SiTwitter} w="20px" h="20px" color="white"></Icon>
              <LinkOverlay isExternal href="https://www.twitter.com/carlschultz_" />
            </LinkBox>
            <LinkBox w="20px" h="20px">
              <Icon as={SiLinkedin} w="20px" h="20px" color="white"></Icon>
              <LinkOverlay isExternal href="https://www.linkedin.com/in/carlvschultz/" />
            </LinkBox>
            <LinkBox w="20px" h="20px" bg="#507ca1">
              <Icon as={SiGithub} w="20px" h="20px" color="white"></Icon>
              <LinkOverlay isExternal href="https://github.com/carl-schultz" />
            </LinkBox>
          </HStack>
        </Stack>
      </Center>
      <Text align="center" fontFamily="system-ui" fontWeight="bold" fontSize="14px" color="white" bg="#507ca1" paddingBottom="15px">
        Designed & Developed by Carl Schultz
      </Text>
    </Box>
  );
};
export default Footer;
