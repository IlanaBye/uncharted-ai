import { useState } from 'react';
import axios from 'axios';
import RecForm from './components/RecForm';
import MakePrompt from './components/MakePrompt';

import UnchartedAi from './UnchartedAi.png';

import './App.css';
import SideBar from './components/Sidebar';

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
      <SideBar />
      <div className="app-logo">
        <img src={UnchartedAi} alt="Uncharted AI Logo" />
      </div>
      <h1 className="page-header">Letter of Recommendation Generator</h1>

      <div id="form-input-output">
        <RecForm
          onRecForm={handleSubmit}
          setPromptData={setPromptData}
          promptData={promptData}
        />
        <div>
          <p className="response-area">
            {loading ? 'loading...' : response}
            {/* The response from AI will display here... */}
          </p>
        </div>
      </div>
      <div className="footer">
        ©2023 Uncharted AI LLC | All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
