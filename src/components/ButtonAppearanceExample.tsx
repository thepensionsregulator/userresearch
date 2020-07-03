import React from 'react';
import { Button } from '@tpr/core';

const ButtonAppearanceExample = () => (
  <div>
    <Button intent="none" cfg={{ mr: 3 }}>
      Submit
    </Button>
    <Button intent="success" cfg={{ mr: 3 }}>
      Success
    </Button>
    <Button intent="danger" cfg={{ mr: 3 }}>
      Danger
    </Button>
    <Button intent="warning" cfg={{ mr: 3 }}>
      Warning
    </Button>
    <Button intent="special" cfg={{ mr: 3 }}>
      Special
    </Button>
    <Button intent="special" cfg={{ mr: 3 }} disabled>
      Disabled
    </Button>
  </div>
);

export default ButtonAppearanceExample;
