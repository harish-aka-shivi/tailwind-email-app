import React, { useCallback, useContext } from 'react';
import Folders from './Folders';
import Categories from './Categories';
import ModalContext from '../context/ModalContext';
import ComponseModal from './ComposeModal';

const Menu = () => {
  const {
    isOpen,
    setIsOpen,
  } = useContext(ModalContext);
  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  return (
    <div className="w-full h-full p-4 flex flex-col">
      <button className="w-full p-4 flex justify-center bg-green-600" onClick={handleClick} onKeyPress={() => {}} type="button" tabIndex="0">Compose</button>
      <Folders />
      <Categories />
      {isOpen && (
        <ComponseModal />
      )}
    </div>
  );
};

export default Menu;
