import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import Sidebar from "./components/Sidebar";
import { GlobalStyles } from "./components/styled/Global";

const theme = {
  colors: {
    title: "#fff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Sidebar />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
