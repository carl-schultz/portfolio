import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Stack spacing="5px" paddingTop="30px">
      <Heading color="#507ca1" fontSize="20px" fontWeight="bold" paddingBottom="7px">
        Technical Skills
      </Heading>
      <Text fontSize="14px" fontWeight="bold">
        Full Stack Development
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        React.js
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        Node.js
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        Java
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        SQL & NoSQL
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        Git & Agile
      </Text>
    </Stack>
  );
};

export default Skills;
