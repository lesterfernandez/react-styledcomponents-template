import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import StyledApp from "./components/styled/App.styled";
import GlobalStyles from "./GlobalStyles";
import { lightTheme } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <StyledApp>Hello world</StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
