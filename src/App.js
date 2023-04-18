import { useState } from 'react';
import axios from 'axios';
import RecForm from './components/RecForm';
import MakePrompt from './components/MakePrompt';

import UnchartedAi from './UnchartedAi.png';

import './App.css';

function App() {
  const [promptData, setPromptData] = useState({
    institution: '',
    personName: '',
    yourName: '',
    relationship: '',
    importantInfo: '',
  });

  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const prompt = MakePrompt(promptData);
    console.log('PROMPT', prompt);
    //communicate with API
    axios
      .post('http://localhost:8080/recommendation', { prompt })
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
      <RecForm
        onRecForm={handleSubmit}
        setPromptData={setPromptData}
        promptData={promptData}
      />
      <p className="response-area">
        {loading ? 'loading...' : response}
        {/* The response from AI will display here... */}
      </p>
      <div className="footer">
        ©2023 Uncharted AI LLC | All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
