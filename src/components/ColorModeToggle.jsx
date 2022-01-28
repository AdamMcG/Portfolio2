import { Button, useColorMode } from 'theme-ui';
import React from 'react';

function ColorModeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      <Button
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
      >
        {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
}

export default ColorModeToggle;
