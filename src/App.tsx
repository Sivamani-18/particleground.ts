import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';

function App() {
  const basename =
    import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_APP_BASE_URL
      : '/';

  console.log('basename', basename, import.meta.env.VITE_APP_BASE_URL);

  return (
    <Router basename={basename}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
