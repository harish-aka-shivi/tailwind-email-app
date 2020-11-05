import React, { useState } from 'react';

const initialValue = {
  openEmail: null,
  setOpenEmail: () => {},
};

const ModalDetailContext = React.createContext(initialValue);
export default ModalDetailContext;

export const ModalDetailProvider = ({ children }) => {
  const [openEmail, setOpenEmail] = useState(null);
  return (
    <ModalDetailContext.Provider value={{
      openEmail,
      setOpenEmail,
    }}
    >
      {children}
    </ModalDetailContext.Provider>
  );
};
