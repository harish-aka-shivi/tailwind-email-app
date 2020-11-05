import React from 'react';
import Root from './containers/Root';
import { AuthProvider } from './context/AuthContext';
import { EmailCrudProvider } from './context/EmailCrudContext';
import { ModalProvider } from './context/ModalContext';
import { ModalDetailProvider } from './context/ModalDetailContext';
import { NavBarProvider } from './context/navBarContext';
import { PaneSelectedProvider } from './context/PaneSelectedContext';

export const App = () => (
  <ModalProvider>
    <PaneSelectedProvider>
      <EmailCrudProvider>
        <NavBarProvider>
          <ModalDetailProvider>
            <Root />
          </ModalDetailProvider>
        </NavBarProvider>
      </EmailCrudProvider>
    </PaneSelectedProvider>
  </ModalProvider>
);

const AppWithAuth = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithAuth;
