import React from 'react';
import { Button } from '@tpr/core';

const ButtonSizeExample = () => (
  <div>
    <Button size="large" cfg={{ mr: 3 }}>
      Large
    </Button>
    <Button size="medium" cfg={{ mr: 3 }}>
      Medium
    </Button>
    <Button size="small" cfg={{ mr: 3 }}>
      Small
    </Button>
  </div>
);

export default ButtonSizeExample;
