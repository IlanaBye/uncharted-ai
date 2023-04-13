import { useState } from 'react';
import axios from 'axios';

import ChatGPT from './ChatGPT.png';
import UnchartedAi from './UnchartedAi.png';

import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //communicate with API
    axios
      .post('http://localhost:3000/recommendation', { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="wrapper">
      <img src={UnchartedAi} alt="Uncharted AI Logo" className="app-logo" />
      <form onSubmit={handleSubmit}>
        <img
          src={ChatGPT}
          alt="ChatGPT Logo"
          className="{loading ? 'chatgpt-logo loading' : 'chatgpt-logo"
        />
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
        />
        <button type="submit">Generate</button>
      </form>
      <p className="response-area">
        {loading ? 'loading...' : response}
        The response from AI will display here...
      </p>
      <div className="footer">
        ©2023 Uncharted AI LLC | All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
