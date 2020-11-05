import React, { useContext, useEffect, useState } from 'react';
// import { format } from 'date-fns';
import EmailCrudContext from '../context/EmailCrudContext';
import ModalDetailContext from '../context/ModalDetailContext';
import PaneSelectedContext from '../context/PaneSelectedContext';
import { PANES_AVAILABLE } from '../util/constants';
import EmailDetail from './EmailDetail';

const EmailItem = ({
  onSelected, email, onClicked, onUnchecked, checked,
}) => {
  const {
    openMap,
  } = useContext(EmailCrudContext);
  const isOpen = openMap[email.id];
  return (
    <>
      <div className={`p-4 w-full flex flex-row items-center space-x-2 ${isOpen === false ? 'text-black font-bold' : ''}`}>
        <input
          onChange={e => {
            if (e.target.checked) {
              onSelected(email);
            } else {
              onUnchecked(email);
            }
          }}
          checked={checked}
          type="checkbox"
          name={email.id}
          value={email.id}
          className="w-6 h-6"
        />
        <div className="flex flex-1 flex-row justify-between" role="button" onClick={onClicked} tabIndex="0" onKeyPress={onClicked}>
          <div className="w-1/4 pl-4 flex">
            {email.sendBy}
          </div>
          <div className="w-1/2 flex-1 pl-4 pr-4 flex flex-row justify-between items-center">
            <div className="w-1/2 flex-1 pl-4 pr-4">
              {email.subject}
            </div>
            <div className="w-1/5">
              {(new Date(parseInt(email.time, 10))).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      <hr className="p-1" />
    </>
  );
};

const EmailList = () => {
  const {
    ids, emails, sendEmailIds, sendEmails, deleteInboxMails, deleteSentMails,
  } = useContext(EmailCrudContext);
  const [selectedEmails, setSelectedEmail] = useState([]);
  const {
    selected,
  } = useContext(PaneSelectedContext);
  const { setOpenEmail } = useContext(ModalDetailContext);

  const onSelected = email => {
    if (!selectedEmails.includes(email.id)) {
      setSelectedEmail(emailArg => ([
        ...emailArg,
        email.id,
      ]));
    }
  };

  const onUnchecked = emailArg => {
    if (selectedEmails.includes(emailArg.id)) {
      const checkedEmail = selectedEmails.filter(emailID => emailArg.id !== emailID);
      setSelectedEmail(checkedEmail);
    }
  };

  useEffect(() => {
    setSelectedEmail([]);
  }, [selected]);

  const onItemClicked = item => {
    setOpenEmail(item);
  };

  const handleDeleteClicked = () => {
    if (selected === PANES_AVAILABLE.INBOX) {
      selectedEmails.forEach(mail => {
        deleteInboxMails(mail);
      });
      setSelectedEmail([]);
    } else {
      selectedEmails.forEach(mail => {
        deleteSentMails(mail);
      });
      setSelectedEmail([]);
    }
  };

  return (
    <div className="h-full w-full flex flex-col">

      <div className="w-full">
        <h1 className="text-2xl p-4">
          {selected === PANES_AVAILABLE.INBOX ? 'Inbox' : 'Sent'}
        </h1>
        <div className="w-full pr-4 pt-2 pb-2 pl-4 space-x-4">
          <div className="h-6 w-6" onClick={handleDeleteClicked} onKeyPress={handleDeleteClicked} role="button" tabIndex="0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>

      </div>
      <div className="flex flex-1 w-full overflow-scroll flex-col">
        { selected === PANES_AVAILABLE.INBOX && (
          ids.map(id => (
            <EmailItem
              email={emails[id]}
              onSelected={onSelected}
              onClicked={() => onItemClicked(emails[id])}
              onUnchecked={onUnchecked}
              checked={selectedEmails.includes(id)}
            />
          ))
        )}
        {
        selected === PANES_AVAILABLE.SENT && (
          sendEmailIds.map(id => (
            <EmailItem
              email={sendEmails[id]}
              onSelected={onSelected}
              onClicked={() => onItemClicked(sendEmails[id])}
              onUnchecked={onUnchecked}
              checked={selectedEmails.includes(id)}
            />
          ))
        )
      }
        <EmailDetail />
      </div>
    </div>
  );
};

export default EmailList;
