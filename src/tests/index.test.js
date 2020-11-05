/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render,
  fireEvent,
  // waitFor,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../App';

describe('test the main screen', () => {
  it('should render all the components', () => {
    render(<App />);

    expect(screen.getByText('Compose')).toBeInTheDocument();
  });

  it('clicking this button should open dialog', () => {
    render(<App />);
    const composeButton = screen.getByText('Compose');
    fireEvent.click(composeButton);
    expect(screen.getByText('To')).toBeInTheDocument();
  });

  // Some more test that can be present
  // 1 => Opening create email dialog, entering fields, sending email should increase the count
  //  of emails
  // 2 => clicking on email should decrease the count of unread email notification
  // 3 => click checkbox on email and clicking delete should reduce the count of unread emails
});
