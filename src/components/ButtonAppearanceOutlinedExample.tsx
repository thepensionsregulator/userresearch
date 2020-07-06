import React from 'react';
import { Button } from '@tpr/core';

const ButtonAppearanceOutlinedExample = () => (
  <div>
    <Button appearance="outlined" intent="none" cfg={{ mr: 3 }}>
      Submit
    </Button>
    <Button appearance="outlined" intent="success" cfg={{ mr: 3 }}>
      Success
    </Button>
    <Button appearance="outlined" intent="danger" cfg={{ mr: 3 }}>
      Danger
    </Button>
    <Button appearance="outlined" intent="warning" cfg={{ mr: 3 }}>
      Warning
    </Button>
    <Button appearance="outlined" intent="special" cfg={{ mr: 3 }}>
      Special
    </Button>
    <Button appearance="outlined" intent="special" cfg={{ mr: 3 }} disabled>
      Disabled
    </Button>
  </div>
);

export default ButtonAppearanceOutlinedExample;
