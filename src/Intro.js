import React from "react";
import { Box, Text, Heading, Stack, HStack, Avatar } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Stack spacing="35px">
      <HStack>
        <Box position="relative" top="5px">
          <Heading align="left" color="#507ca1" paddingRight="15px">
            Carl Schultz
          </Heading>
          <Heading fontSize="20px" color="grey">
            Software Engineer
          </Heading>
        </Box>
        <Avatar src="/headshot.jpg" size="lg" position="relative" top="5px"></Avatar>
      </HStack>
      <Text font="body" fontSize="18px" lineHeight="tall" fontWeight="bold">
        Hey 👋
        <Text font="body" fontSize="15px" lineHeight="tall" paddingTop="10px" fontWeight="normal">
          I'm a software engineer and recent graduate from the University of Dayton, currently working around Fullstack Web development! Previously
          working with DevOps technologies and practices.
        </Text>
      </Text>
    </Stack>
  );
};

export default Intro;
