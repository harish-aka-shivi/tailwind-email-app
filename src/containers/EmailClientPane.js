import React, { useMemo } from 'react';
import { useWindowSize } from 'react-use';
import { TOOLBAR_HEIGHT } from '../util/constants';
import EmailList from './EmailList';
import Menu from './Menu';
import Toolbar from './Toolbar';

const EmailClientPane = () => {
  const { height } = useWindowSize();

  const styleTopBar = useMemo(() => ({
    flex: 0.1,
    height: TOOLBAR_HEIGHT,
  }), []);
  const styleBottomBody = useMemo(() => ({
    flex: 0.9,
  }), []);
  const styleEmailCategories = useMemo(() => ({
    flex: 0.3,
  }), []);
  const styleEmailList = useMemo(() => ({
    flex: 0.7,
    height: height - TOOLBAR_HEIGHT,
  }), [height]);

  return (
  // <div className="relative flex">
    <div className="flex flex-col flex-1 w-screen">
      <div className="flex flex-row h-full" style={styleTopBar}>
        <Toolbar />
      </div>
      <div className="flex flex-row" style={styleBottomBody}>
        <div className="flex h-full" style={styleEmailCategories}>
          <Menu />
        </div>
        <div style={styleEmailList} className="flex bg-white ml-4 mr-6 overflow-hidden">
          <EmailList />
        </div>
      </div>
    </div>
  // </div>
  );
};

export default EmailClientPane;
