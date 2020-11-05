import { nanoid } from 'nanoid';

export const PANES_AVAILABLE = {
  INBOX: 'INBOX',
  SENT: 'SENT',
};

export const generateEmail = ({
  subject, content, sendBy,
  sendTo, time,
}) => ({
  id: nanoid(),
  subject,
  content,
  sendBy,
  sendTo,
  time,
});

export const TOOLBAR_HEIGHT = 56;
