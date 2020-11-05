import React, { useContext } from 'react';
import clsx from 'clsx';
import PaneSelectedContext from '../context/PaneSelectedContext';
import { PANES_AVAILABLE } from '../util/constants';

const GenericFolder = ({ title, icon, onClick = () => {} }) => (
  <div className="w-full flex flex-row p-2 space-x-4" onClick={onClick} role="button" tabIndex="0" onKeyPress={onClick}>
    <div className={clsx('h-6 w-6 rounded')}>
      {icon()}
    </div>
    <div>{title}</div>
  </div>
);

const SendEmail = () => {
  const { setSelectedPane } = useContext(PaneSelectedContext);
  const handleClick = () => {
    setSelectedPane(PANES_AVAILABLE.SENT);
  };
  return (
    <GenericFolder
      title="Send Mail"
      icon={() => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      )}
      onClick={handleClick}
    />
  );
};

const Inbox = () => {
  const { setSelectedPane } = useContext(PaneSelectedContext);
  const handleClick = () => {
    setSelectedPane(PANES_AVAILABLE.INBOX);
  };
  return (
    <GenericFolder
      title="Inbox"
      icon={() => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
        </svg>
      )}
      onClick={handleClick}
    />
  );
};

const Folders = () => (
  <div className="w-full flex flex-col space-y-4 p-4">
    <Inbox />
    <SendEmail />
    <GenericFolder
      title="Important"
      icon={() => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )}
    />
    <GenericFolder
      title="Drafts"
      icon={() => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )}
    />
  </div>
);

export default Folders;
