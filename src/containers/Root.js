import React, { useContext } from 'react';
import { useWindowSize } from 'react-use';
import NavBarContext from '../context/navBarContext';
import EmailClientPane from './EmailClientPane';
import LeftMostNav from './LeftMostNav';

const WIDTH_OPEN_NAV = 300;
const WIDTH_CLOSED_NAV = 50;

const Root = () => {
  const {
    open,
  } = useContext(NavBarContext);
  const { width } = useWindowSize();
  const widthNav = open ? WIDTH_OPEN_NAV : WIDTH_CLOSED_NAV;
  const widthMainContainer = open ? width - WIDTH_OPEN_NAV : width - WIDTH_CLOSED_NAV;
  return (
    <div className="bg-gray-200">
      <div className="flex flex-row flex-1 w-screen h-screen">
        <div
          className="flex h-screen"
          style={{
            width: widthNav,
          }}
        >
          <LeftMostNav />
        </div>
        <div
          className="flex h-screen"
          style={{
            width: widthMainContainer,
          }}
        >
          <EmailClientPane />
        </div>
      </div>
    </div>
  );
};

export default Root;
