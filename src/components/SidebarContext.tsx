import React, { Dispatch } from 'react';

export type Actions =
  | { type: 'COMPLETE'; index: number }
  | { type: 'INCOMPLETE'; index: number };

const SidebarContext = React.createContext<{
  state: any[];
  dispatch: Dispatch<Actions>;
}>({ state: [], dispatch: () => null });

export default SidebarContext;
