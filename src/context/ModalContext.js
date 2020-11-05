import React, { useState } from 'react';

const initialState = {
  isOpen: false,
  setIsOpen: () => {},
};

const ModalContext = React.createContext(initialState);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenFn = bool => {
    console.log(bool);
    setIsOpen(bool);
  };
  return (
    <ModalContext.Provider value={{
      isOpen,
      setIsOpen: setIsOpenFn,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
