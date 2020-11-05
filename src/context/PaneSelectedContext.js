import React, { useState } from 'react';
import { PANES_AVAILABLE } from '../util/constants';

const initialState = {
  selected: PANES_AVAILABLE.INBOX,
  setSelectedPane: () => {},
};

const PaneSelectedContext = React.createContext(initialState);
export default PaneSelectedContext;

export const PaneSelectedProvider = ({ children }) => {
  const [selectedPane, setSelectedPane] = useState(PANES_AVAILABLE.INBOX);

  return (
    <PaneSelectedContext.Provider value={{
      selected: selectedPane,
      setSelectedPane,
    }}
    >
      {children}
    </PaneSelectedContext.Provider>
  );
};
