import { create } from '@storybook/theming';
import { GlobalStyles, ThemeProvider } from '@thiago_brolly/styles';

const lightTheme = create({
  base: 'light',
  brandTitle: 'PAYLIVRE UI',
  //brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'PAYLIVRE UI',
  //brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
    light: lightTheme,
    // darkMode: {
    //   darkClass: 'lights-out',
    //   lightClass: 'lights-on'
    // }
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
