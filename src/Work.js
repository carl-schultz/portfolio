import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Work = () => {
  const tabOrientation = useBreakpointValue({ base: "horizontol", md: "vertical" });
  const tabWidth = useBreakpointValue({ base: "", md: "270px" });
  const tabFontSize = useBreakpointValue({ base: "12px", md: "15px" });
  const tabPaddingTop = useBreakpointValue({ base: "15px", md: "0px" });
  const tabPaddingLeft = useBreakpointValue({ base: "0px", md: "15px" });
  return (
    <Box id="work">
      <Heading color="#507ca1" fontWeight="bold" fontSize="22px" paddingBottom="15px">
        Work Experience
      </Heading>
      <Tabs orientation={tabOrientation}>
        <TabList w={tabWidth}>
          <Tab
            align="start"
            sx={{
              ":focus": {
                shadow: "none",
              },
            }}
            _selected={{ background: "#E2E8F0", borderColor: "#507ca1" }}
          >
            <Text fontSize={tabFontSize} w="100%" align="left" fontWeight="bold">
              KeyBank
            </Text>
          </Tab>
          <Tab
            sx={{
              ":focus": {
                shadow: "none",
              },
            }}
            _selected={{ background: "#E2E8F0", borderColor: "#507ca1" }}
          >
            <Text fontSize={tabFontSize} w="100%" align="left" fontWeight="bold">
              Hyland
            </Text>
          </Tab>
          <Tab
            sx={{
              ":focus": {
                shadow: "none",
              },
            }}
            _selected={{ background: "#E2E8F0", borderColor: "#507ca1" }}
          >
            <Text fontSize={tabFontSize} w="100%" align="left" fontWeight="bold">
              University of Dayton
            </Text>
          </Tab>
          <Tab
            sx={{
              ":focus": {
                shadow: "none",
              },
            }}
            _selected={{ background: "#E2E8F0", borderColor: "#507ca1" }}
          >
            <Text fontSize={tabFontSize} w="100%" align="left" fontWeight="bold">
              Monsoon Analytics
            </Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel paddingTop={tabPaddingTop} paddingLeft={tabPaddingLeft} paddingBottom="0px">
            <Text color="grey" fontSize="15px">
              March 2021 - Present
            </Text>
            <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
              Assosciate Software Engineer
            </Text>
            <Text as="span" fontWeight="bold" color="#507ca1">
              @ KeyBank
            </Text>
            <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
              Responsible for Marketing Delivery tools and procceses
            </Text>
          </TabPanel>
          <TabPanel paddingTop={tabPaddingTop} paddingLeft={tabPaddingLeft} paddingBottom="0px">
            <Text color="grey" fontSize="15px">
              May 2019 - January 2020
            </Text>
            <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
              Software Engineer, DevOps
            </Text>
            <Text as="span" fontWeight="bold" color="#507ca1">
              @ Hyland Software
            </Text>
            <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
              During my time as a software developer at Hyland, I worked with my team to ensure products were deployable and development practices
              remained stable and maintainable through CI/CD, utilizing Azure Dev Ops Server, Jenkins, and Kubernetes. I was also responsible for the
              maintenance and improvement of various internal tools related to the build process used by the R&D department
            </Text>
            <Text color="grey" fontSize="15px" paddingTop="15px">
              May 2019 - January 2020
            </Text>
            <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
              Infrastructure Intern
            </Text>
            <Text as="span" fontWeight="bold" color="#507ca1">
              @ Hyland Software
            </Text>
            <Text fontSize="15px" paddingTop="4px">
              Worked on numerous projects such as running audits on resources, optimizing workflow processes, and working with team to manage and
              perform maintenance of network infrastructure, virtual environments, servers, and storage devices. Also worked with team of other
              interns to design, critique, and implement an IoT notification solution for Hyland in company wide hackathon where we were selected as
              winning team. Selected to represent and recruit for Hyland at the University of Dayton where I created recruitment events and met with
              prospective hires to share work opportunities and discuss application process
            </Text>
          </TabPanel>
          <TabPanel paddingTop={tabPaddingTop} paddingLeft={tabPaddingLeft} paddingBottom="0px">
            <Text color="grey" fontSize="15px">
              2019
            </Text>
            <Text as="span" fontWeight="bold" fontSize="15px" paddingRight="5px">
              Computer Science TA
            </Text>
            <Text as="span" fontWeight="bold" color="#507ca1">
              @ University of Dayton
            </Text>
            <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
              Aided new computer science students by deconstructing and explaining core programming concepts in Java. Also helped the instructor with
              grading and held weekly office hours for students to come and ask questions
            </Text>
          </TabPanel>
          <TabPanel paddingTop={tabPaddingTop} paddingLeft={tabPaddingLeft} paddingBottom="0px">
            <Text color="grey" fontSize="15px">
              2019
            </Text>
            <Text as="span" fontWeight="bold" paddingRight="5px">
              Quality Assurance
            </Text>
            <Text as="span" fontWeight="bold" color="#507ca1">
              @ Monsoon Analytics
            </Text>
            <Text fontSize="15px" paddingTop="4px" lineHeight="tall">
              Performed functional and exploratory testing of Monsoon’s web app
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Work;
