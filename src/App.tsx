import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Grid from './components/Grid';
import View from './components/View';
import Create from './components/Create';

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start bg-pink-500">
      <BrowserRouter>
        <nav className="w-[100%] h-[100%] flex flex-row justify-around items-center">
          <Link
            className="animate-pulse hover:underline hover:scale-105 transition-transform duration-300 hover:text-red-100"
            to="/grid"
          >
            Grid
          </Link>
          <Link
            className="animate-pulse hover:underline hover:scale-105 transition-transform duration-300 hover:text-red-100"
            to="/view"
          >
            View
          </Link>
          <Link
            className="animate-pulse hover:underline hover:scale-105 transition-transform duration-300 hover:text-red-100"
            to="/create"
          >
            Create
          </Link>
        </nav>

        <Routes>
          <Route path="/grid" element={<Grid />} />
          <Route path="/view" element={<View />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
