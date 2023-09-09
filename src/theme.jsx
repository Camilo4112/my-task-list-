import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1A202C" : "#FFFFFF", // Fondo
        color: props.colorMode === "dark" ? "#F2F2F2" : "#000000", // Texto
      },
    }),
  },
  colors: {
    brand: {
      light: "#4EA8DE", // Resaltado (light mode)
      dark: "#166CCF", // Resaltado (dark mode)
    },
  },
});

export default theme;
