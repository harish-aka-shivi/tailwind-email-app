import React, { useCallback } from 'react';
import { useLocalStorage } from 'react-use';
import {
  emailsData, idsData, openMapData, sendEmailData, sendEMailIdsData,
} from '../util/data';

const EmailCrudContext = React.createContext({
  emails: emailsData,
  ids: idsData,
  openMap: openMapData,
  sendEmails: sendEmailData,
  sendEmailIds: sendEMailIdsData,
  sendEmail: () => {},
  setEmailOpen: () => {},
  deleteSentMails: () => {},
  deleteInboxMails: () => {},
});

export const EmailCrudProvider = ({ children }) => {
  const [emails, setEmails] = useLocalStorage('emails_shj', emailsData);
  const [openMap, setOpenMap] = useLocalStorage('openMap_shj', openMapData);
  const [ids, setIds] = useLocalStorage('ids_shj', idsData);
  const [sendEmails, setSendEmails] = useLocalStorage('sendEmails_shj', sendEmailData);
  const [sendEmailIds, setSendEmailIds] = useLocalStorage('sendEmailsIDs_shj', sendEMailIdsData);

  const sendEmail = useCallback(emailArg => {
    setSendEmails({
      ...sendEmails,
      [emailArg.id]: emailArg,
    });
    setSendEmailIds([
      ...sendEmailIds,
      emailArg.id,
    ]);
  }, [setSendEmails, setSendEmailIds, sendEmails, sendEmailIds]);

  const deleteSentMails = useCallback(emailArg => {
    if (!emailArg) {
      return;
    }
    const newEmailIds = sendEmailIds.filter(
      emailId => emailId !== emailArg,
    );

    const newEmails = newEmailIds.reduce((acc, id) => {
      acc[id] = sendEmails[id];
      return acc;
    }, {});

    setSendEmailIds(newEmailIds);
    setSendEmails(newEmails);
  }, [sendEmailIds, sendEmails, setSendEmailIds, setSendEmails]);

  const deleteInboxMails = useCallback(emailArg => {
    if (!emailArg) {
      return;
    }
    const newEmailIds = ids.filter(emailId => emailId !== emailArg);

    const newEmails = newEmailIds.reduce((acc, id) => {
      acc[id] = emails[id];
      return acc;
    }, {});

    // set the key to true
    const filteredOpen = Object.keys(openMap).reduce((acc, key) => {
      if (newEmailIds.includes(key)) {
        acc[key] = openMap[key];
      }
      return acc;
    }, {});
    setOpenMap(filteredOpen);
    setIds(newEmailIds);
    setEmails(newEmails);
  }, [emails, ids, setEmails, setIds, openMap, setOpenMap]);

  const setEmailOpen = useCallback(emailArg => {
    if (!emailArg) {
      return;
    }
    const newMap = { ...openMap, [emailArg.id]: true };
    setOpenMap(newMap);
  }, [setOpenMap, openMap]);

  return (
    <EmailCrudContext.Provider
      value={{
        emails,
        sendEmailIds,
        ids,
        sendEmails,
        openMap,
        sendEmail,
        setEmailOpen,
        deleteInboxMails,
        deleteSentMails,
      }}
    >
      {children}

    </EmailCrudContext.Provider>
  );
};

export default EmailCrudContext;
