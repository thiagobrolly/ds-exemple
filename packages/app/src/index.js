import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyles, ThemeProvider } from '@thiago_brolly/styles';

render(
  <ThemeProvider>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
