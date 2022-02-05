import {
  Flex, Container, NavLink, ThemeProvider, Box
} from 'theme-ui';
import React from 'react';
import theme from './theme';
import ColorModeToggle from './components/ColorModeToggle';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Container>
          <Flex as="nav">
            <NavLink p={2}>About</NavLink>
            <NavLink p={2}>Projects</NavLink>
            <NavLink p={2}>Experience</NavLink>
            <NavLink p={2}>Interests</NavLink>
            <ColorModeToggle p={2} />
          </Flex>
        </Container>
      </header>
      <body>
        <Box p={5}>
          <About p={5}/>
          <Projects p={5}/>
          <ContactUs p={5} />
        </Box>
      </body>
      <footer>
        <p>
          Testing Footer Test
        </p>
      </footer>
    </ThemeProvider>
  );
}

export default App;
