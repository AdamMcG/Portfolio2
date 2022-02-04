import { Box, Switch,  useColorMode } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';

function ColorModeToggle(props) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box p={props.p}>
      <Switch label={"Dark Mode"}
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
      >
      </Switch>
      </Box>
  );
}

ColorModeToggle.propTypes = {
  p: PropTypes.string
}

export default ColorModeToggle;
