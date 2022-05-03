import { ThemeProvider, createGlobalStyle } from "styled-components";
import { create } from '@storybook/theming';
import { theme } from '../packages/styles/src/theme';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family.default};
  }
`;

const lightTheme = create({
  base: "light",
  brandTitle: 'PAYLIVRE UI',
  //brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
})

const darkTheme = create({
  base: "dark",
  brandTitle: 'PAYLIVRE UI',
  //brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme
    // darkMode: {
    //   darkClass: 'lights-out',
    //   lightClass: 'lights-on'
    // }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]
