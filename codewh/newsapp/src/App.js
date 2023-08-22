import React, { useState } from "react";
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pgSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pgSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pgSize} country="in" category="business" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pgSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pgSize} country="in" category="technology" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pgSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pgSize} country="in" category="science" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pgSize} country="in" category="entertainment" />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
