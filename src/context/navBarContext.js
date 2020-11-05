import React, { useState } from 'react';

const intialValue = {
  open: false,
  setOpen: () => {},
};

const NavBarContext = React.createContext(intialValue);

export const NavBarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContext;
