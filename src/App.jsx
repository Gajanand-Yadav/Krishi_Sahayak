
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KrishiSahayak from './components/Krishi';
import Login from './components/login.jsx';
import Chatbot from './components/Chatbot.jsx';
import AiCropPredict from './components/AiCropPredict.jsx';
import WeatherAlerts from './components/WeatherAlerts.jsx';

function App() {
  return (
    <div>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<KrishiSahayak />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/AiCropPredict" element={<AiCropPredict />} />
        <Route path="/WeatherAlerts" element={<WeatherAlerts />} />
     
        


      </Routes>
    </div>
  );
}

export default App;
