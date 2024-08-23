import React from 'react';

import { sendRequest } from '../src/utils/requestHandler';

const App: React.FC = () => {
  const handleButtonClick = () => {
    const requestHandler = {
      message: 'Button Clicked!',
      timestamp: new Date().toISOString(),
    };

    sendRequest(requestHandler);
  };

  return (
    <div className="App">
      <h1>Offline Webhook App</h1>
      <button className="button" onClick={handleButtonClick}>
        Hit Me
      </button>
    </div>
  );
};

export default App;
