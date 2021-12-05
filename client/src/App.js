import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home';
import Encode from './components/encode';
import Decode from './components/decode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path ="/encode" caseSensitive={false} element={<Encode />} /> 
        <Route path ="/decode" caseSensitive={false} element={<Decode />} /> 
    
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
