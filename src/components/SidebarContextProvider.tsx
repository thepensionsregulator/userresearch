import React, { useReducer } from 'react';
import SidebarContext, { Actions } from './SidebarContext';

const SidebarProvider = (props: any) => {
  const sectionCompletedState = new Array(8);
  sectionCompletedState.fill(false);

  const [state, dispatch] = useReducer(
    (sectionCompletedState: any[], action: Actions) => {
      switch (action.type) {
        case 'COMPLETE':
          sectionCompletedState[action.index] = true;
          return { ...sectionCompletedState };
      }
    },
    sectionCompletedState,
  );

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
