import React, { useCallback, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import EmailCrudContext from '../context/EmailCrudContext';
import ModalDetailContext from '../context/ModalDetailContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const EmailDetail = () => {
  const { openEmail, setOpenEmail } = useContext(ModalDetailContext);
  const { setEmailOpen } = useContext(EmailCrudContext);
  const closeModal = useCallback(() => {
    setOpenEmail(null);
  }, [setOpenEmail]);

  useEffect(() => {
    setEmailOpen(openEmail);
  }, [setEmailOpen, openEmail]);

  return (
    <Modal
      isOpen={Boolean(openEmail)}
      style={customStyles}
      onRequestClose={closeModal}
    >
      {Boolean(openEmail) && (
      <div className="h-full w-full flex flex-col space-y-4 p-4">
        <h6 className="w-full">{openEmail.subject}</h6>

        <p className="w-full">
          {openEmail.content}
        </p>

      </div>

      )}

    </Modal>
  );
};

export default EmailDetail;
