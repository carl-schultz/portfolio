import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Main.js";
import { useState, useEffect } from "react";

function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    document.fonts.load("12px Quicksand").then(() => setIsReady(true));
  }, []);

  return (
    isReady && (
      <ChakraProvider theme={theme}>
        <Main />;
      </ChakraProvider>
    )
  );
}

export default App;
