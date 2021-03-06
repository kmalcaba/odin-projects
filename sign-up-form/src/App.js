import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/Global";
import Sidebar from "./components/Sidebar";
import SignUpContainer from "./components/SignUpContainer";

const theme = {
  colors: {
    title: "#fff",
    body: "#eee",
    form: "#fff",
    button: "palevioletred",
    shadowSm: "rgba(0,0,0,0.15)",
  },
  screens: {
    tablet: "810px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Sidebar />
          <SignUpContainer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
