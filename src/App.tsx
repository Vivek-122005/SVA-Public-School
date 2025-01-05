import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Data from './pages/data';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
