import { extendTheme } from "@chakra-ui/react";

  /*Colores*/

const colors = {
    "--first-color": "#d6a692",
    "--second-color": "#ce7777",
    "--third-color": "#ad4c6b",
    "--backg-color": "#331d4a",
    "--backg-second-color": "#504375",
    "--black-color": "#000000",
    "--grey-light-color": "#C0C0C0",
    "--white-color": "#ffffff",
};

  /*Tipografia*/

  const fonts = {
  '--first-font': ` 'Roboto', sans-serif `,
  "--second-font": '"Nunito", sans-serif'
}

const Theme = extendTheme({ colors, fonts });

export default Theme;