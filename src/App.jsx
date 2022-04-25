import {
  Flex, Container, NavLink, ThemeProvider, Box, Divider, Button
} from 'theme-ui';
import React, { useState } from 'react';
import theme from './theme';
import ColorModeToggle from './components/ColorModeToggle';
import ContactUsModal from './components/ContactUsModal';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import FooterContent from './components/FooterContent';

function App() {
  //Bring state logic into component
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Container sx={{
          position: 'fixed',
          backgroundColor: 'darken',
          scrollBehavior: 'smooth'
        }}>
          <Flex as="nav">
            <NavLink href='#about' p={2}>About</NavLink>
            <NavLink href='#experience' p={2}>Experience</NavLink>
            <NavLink href='#projects' p={2}>Projects</NavLink>
            <Box sx={{
              justifyContent: 'flex-end'
            }}>
              <ColorModeToggle p={2} />
            </Box>
          </Flex>
        </Container>
      </header>
      <body>
        <Container p={6}>
          <About p={1} />
          <Divider />
          <Experience p={1}/>
          <Divider />
          <Projects p={1} />
          <Divider />
          <ContactUsModal/>
        </Container>
      </body>
      <footer>
        <Box p={1}>
        <FooterContent p={5}/>
        </Box>
      </footer>
    </ThemeProvider>
  );
}

export default App;
