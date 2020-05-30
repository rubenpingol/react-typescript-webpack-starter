import React from 'react';

import '../../scss/styles.scss';

interface AppShape {
  visitorName: string;
}

const App: React.FunctionComponent<AppShape> = ({ visitorName }) => {
  return (
    <>
      <h1>Hi {`${visitorName}`}!</h1>
      <h1>Welcome to React + TypeScript + Webpack Starter Kit!</h1>
    </>
  );
};

export default App;
