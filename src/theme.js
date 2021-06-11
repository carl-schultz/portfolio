import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Crimson Text",
    body: "Quicksand",
  },
  fontWeights: {
    normal: 400,
    bold: 600,
  },
});

export default theme;
