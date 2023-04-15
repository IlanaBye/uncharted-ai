import { useState } from 'react';
import axios from 'axios';
import RecForm from './components/RecForm';
// import ChatGPT from './ChatGPT.png';
import UnchartedAi from './UnchartedAi.png';

import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  //const [form, setForm] = useState({
  //letterTo: "",
  //schoolCollege: false,
  //company: false,
  //personName: "",
  //yourName: "",
  //relationship: "",
  //importantInfo: "",
  //})
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    setLoading(true);

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
      <RecForm onRecForm={handleSubmit} setPrompt={setPrompt} />
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
