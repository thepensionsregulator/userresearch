import React from 'react';
import { Button } from '@tpr/core';

const ButtonSizeAndAppearanceExample = () => (
  <div>
    <Button size="large" appearance="outlined" intent="none" cfg={{ mr: 3 }}>
      Large
    </Button>
    <Button
      size="medium"
      appearance="outlined"
      intent="success"
      cfg={{ mr: 3 }}
    >
      Medium
    </Button>
    <Button size="small" appearance="outlined" intent="danger" cfg={{ mr: 3 }}>
      Small
    </Button>
    <Button size="large" appearance="outlined" intent="warning" cfg={{ mr: 3 }}>
      Large
    </Button>
    <Button
      size="medium"
      appearance="outlined"
      intent="special"
      cfg={{ mr: 3 }}
    >
      Medium
    </Button>
    <Button
      size="small"
      appearance="outlined"
      intent="special"
      cfg={{ mr: 3 }}
      disabled
    >
      Small
    </Button>
  </div>
);

export default ButtonSizeAndAppearanceExample;
