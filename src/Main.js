import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Heading,
  Center,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  Link,
  HStack,
  GridItem,
  Avatar,
} from "@chakra-ui/react";

const Main = () => {
  const column = useBreakpointValue({ base: "1", md: "2" });
  const display = useBreakpointValue({ base: "none", md: "block" });
  const padding = useBreakpointValue({ base: "20px", md: "96px" });
  const paddingWork = useBreakpointValue({ base: "0px", md: "20px" });
  const float = useBreakpointValue({ base: "left", md: "right" });

  return (
    <Box paddingTop={padding}>
      <Center>
        <SimpleGrid columns={column} spacing="0px" width="48em" margin="20px">
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
            <Text font="body" fontSize="15px" lineHeight="tall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Stack>

          <GridItem>
            <Stack float={float}>
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
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Center>
      <Center>
        <Stack spacing="35px" paddingTop={paddingWork} width="48em" margin="20px">
          <Box id="work">
            <Heading color="#507ca1" fontWeight="bold" fontSize="22px" paddingBottom="7px">
              Work Experience
            </Heading>
            <Stack spacing="15px">
              <Box>
                <Text color="grey" fontSize="15px">
                  March 2021 - Present
                </Text>
                <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
                  Assosciate Software Engineer
                </Text>
                <Text as="span" fontWeight="bold" color="grey">
                  @ KeyBank
                </Text>
                <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
                  Responsible for Marketing Delivery tools and procceses
                </Text>
              </Box>
              <Box>
                <Text color="grey" fontSize="15px">
                  May 2019 - January 2020
                </Text>
                <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
                  Software Engineer, DevOps
                </Text>
                <Text as="span" fontWeight="bold" color="grey">
                  @ Hyland Software
                </Text>
                <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
                  During my time as a software developer at Hyland, I worked with my team to ensure products were deployable and development practices
                  remained stable and maintainable through CI/CD, utilizing Azure Dev Ops Server, Jenkins, and Kubernetes. I was also responsible for
                  the maintenance and improvement of various internal tools related to the build process used by the R&D department
                </Text>
              </Box>
              <Box>
                <Text color="grey" fontSize="15px">
                  May 2019 - January 2020
                </Text>
                <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
                  Infrastructure Intern
                </Text>
                <Text as="span" fontWeight="bold" color="grey">
                  @ Hyland Software
                </Text>
                <Text fontSize="15px" paddingTop="4px">
                  Worked on numerous projects such as running audits on resources, optimizing workflow processes, and working with team to manage and
                  perform maintenance of network infrastructure, virtual environments, servers, and storage devices. Also worked with team of other
                  interns to design, critique, and implement an IoT notification solution for Hyland in company wide hackathon where we were selected
                  as winning team. Selected to represent and recruit for Hyland at the University of Dayton where I created recruitment events and met
                  with prospective hires to share work opportunities and discuss application process
                </Text>
              </Box>
              <Box>
                <Text color="grey" fontSize="15px">
                  2019
                </Text>
                <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
                  Computer Science TA
                </Text>
                <Text as="span" fontWeight="bold" color="grey">
                  @ University of Dayton
                </Text>
                <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
                  Aided new computer science students by deconstructing and explaining core programming concepts in Java. Also helped the instructor
                  with grading and held weekly office hours for students to come and ask questions
                </Text>
              </Box>
              <Box>
                <Text color="grey" fontSize="15px">
                  2019
                </Text>
                <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
                  Quality Assurance
                </Text>
                <Text as="span" fontWeight="bold" color="grey">
                  @ Monsoon Analytics
                </Text>
                <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
                  Performed functional and exploratory testing of Monsoon’s web app
                </Text>
              </Box>
            </Stack>
          </Box>
          <Box id="projects">
            <Heading color="#507ca1" fontWeight="bold" fontSize="22px" paddingBottom="7px">
              Projects!
            </Heading>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default Main;
