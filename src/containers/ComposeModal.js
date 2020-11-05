import React, { useCallback, useContext, useState } from 'react';
import Modal from 'react-modal';
import AuthContext from '../context/AuthContext';
import EmailCrudContext from '../context/EmailCrudContext';
import ModalContext from '../context/ModalContext';
import { generateEmail } from '../util/constants';

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
const ComponseModal = () => {
  const {
    isOpen,
    setIsOpen,
  } = useContext(ModalContext);

  const {
    sendEmail,
  } = useContext(EmailCrudContext);

  const {
    userEmail,
  } = useContext(AuthContext);

  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  // const [error, setError] = useState('');
  const [emailState, setEmailState] = useState('');

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    if (!emailState) {
      return;
    }

    const emailGenerated = generateEmail({
      sendBy: userEmail,
      subject,
      content,
      sendTo: emailState,
      time: Date.now(),
    });
    console.log(userEmail);
    sendEmail(emailGenerated);
    setIsOpen(false);
  }, [content, userEmail, subject, emailState, sendEmail, setIsOpen]);

  const handleSubjectChange = useCallback(e => {
    setSubject(e.target.value);
  }, []);

  const handleContentChange = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const handleEmailChange = useCallback(e => {
    setEmailState(e.target.value);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <div className="h-full w-full flex">

        <form className="h-full w-full flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="to" className="w-full flex flex-col">
            To
            <input type="email" id="to" className="border-gray-400 border-solid border" value={emailState} onChange={handleEmailChange} required />
          </label>
          <label htmlFor="subject" className="w-full flex flex-col">
            Subject
            <input type="text" id="subject" className="border-gray-400 border-solid border" value={subject} onChange={handleSubjectChange} />
          </label>

          <label htmlFor="content" className="w-full flex flex-col">
            Content
            <textarea type="text" id="content" className="border-gray-400 border-solid border h-64 resize-none" value={content} onChange={handleContentChange} />
          </label>

          <input type="submit" className="w-full p-4 flex justify-center bg-green-600 mt-2" title="Send" />
        </form>
      </div>

    </Modal>
  );
};

export default ComponseModal;
