import { withModalTheme } from "@mattjennings/react-modal"

const theme = withModalTheme({
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
  ],
  fonts: {
    body: '"Raleway", Arial, Roboto, sans-serif',
    heading: '"Raleway", Roboto, sans-serif',
    monospace: '"Raleway", sans-serif'
    },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96,
  ],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#cccaca',
    modes: {
      dark: {
        text: '#fff',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
        darken: '#000321'
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      border: '1px solid',
      borderColor: 'secondary',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'secondary',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'accent',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    hr: {
      color: 'text',
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  modals: {
    // add a new `outlined` variant that can be used on <Modal />
    outlined: {
      backgroundColor: 'background',
      border: '5px solid',
      borderRadius: '5px',
      borderColor: 'gray',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      minHeight: '16rem',
      minWidth: '50rem',
      maxWidth: '100rem',
      position: 'absolute',
      top: ['25%', '25%', '10%'],
      zIndex: 'modal',
    },

    // will be used for the `outlined` variant when the modal is in full screen
    outlinedFullScreen: {
      backgroundColor: 'background',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      maxHeight: '200vh',
      height: `fill-available`,
      position: 'absolute',
      top: 0,
      width: '200vw',
      zIndex: 'modal',
    },
  },
});

export default theme;
