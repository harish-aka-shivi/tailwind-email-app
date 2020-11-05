import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import EmailCrudContext from '../context/EmailCrudContext';
import NavBarContext from '../context/navBarContext';

const Toolbar = () => {
  const { open, setOpen } = useContext(NavBarContext);

  const handleClick = () => {
    setOpen(!open);
  };

  const {
    openMap,
  } = useContext(EmailCrudContext);

  const {
    logout,
  } = useContext(AuthContext);

  const [unreadEmails, setUnreadEmails] = useState(0);
  const history = useHistory();
  useEffect(() => {
    if (openMap) {
      const unreadEmailsTemp = Object.keys(openMap).filter(key => !openMap[key]).length;
      setUnreadEmails(unreadEmailsTemp);
    }
  }, [setUnreadEmails, openMap]);

  return (
    <div className="w-full bg-white flex flex-row m-1">
      <div className="flex-1 h-full flex w-6 justify-start pl-6 items-center flex-row">
        <div className="relative">
          <div className="h-8 w-8 p-1" onClick={handleClick} onKeyPress={handleClick} tabIndex="0" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1 relative flex justify-end items-center space-x-4 pr-4">
        <div className="relative p-1">
          <div className="h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          {unreadEmails && (<div className="absolute ml-2 right-0 top-0 w-4 h-4 text-center bg-red-600 rounded-2xl text-xs text-white">{unreadEmails}</div>
          )}
        </div>
        <button
          onClick={() => {
            logout();
            history.replace('/login');
          }}
          type="button"
        >
          logout

        </button>
      </div>
    </div>
  );
};

export default Toolbar;
