import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { GlobalContextProvider } from "./context/GlobalContextProvider";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </GlobalContextProvider>
    </ThemeProvider>
  );
}

export default App;
