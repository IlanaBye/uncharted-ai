import ChatGPT from './ChatGPT.png';
import UnchartedAi from './UnchartedAi.png';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <img src={UnchartedAi} alt="Uncharted AI Logo" className="app-logo" />
      <form>
        <img src={ChatGPT} alt="ChatGPT Logo" className="chatgpt-logo" />
        <input type="text" value="" placeholder="Ask anything..." />
        <button type="submit">Generate</button>
      </form>
      <p className="response-area">The response from AI will display here...</p>
      <div className="footer">
        ©2023 Uncharted AI LLC | All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
