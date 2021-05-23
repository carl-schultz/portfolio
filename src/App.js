import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import Main from "./Main.js";

const theme = extendTheme({
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  fontSizes: {},
});

function App() {
  return (
    <Box bg="#f7f7f7">
      <ChakraProvider theme={theme}>
        <Main />
      </ChakraProvider>
    </Box>
  );
}

export default App;
