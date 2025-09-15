import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Grid from "./components/Grid";
import View from "./components/View";
import CreateUpdate from "./components/CreateUpdate";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <h1 className="text-4xl font-bold mb-4 animate-pulse">🚀 Welcome to CRUD</h1>
      <p className="text-lg mb-6">Choose an option below to get started</p>

      <div className="flex gap-6">
        <Link
          to="/grid"
          className="px-6 py-3 bg-red-500 rounded-xl shadow-md hover:bg-red-600 transition"
        >
          Go to Grid
        </Link>
        <Link
          to="/view"
          className="px-6 py-3 bg-green-500 rounded-xl shadow-md hover:bg-green-600 transition"
        >
          Go to View
        </Link>
        <Link
          to="/createUpdate"
          className="px-6 py-3 bg-purple-500 rounded-xl shadow-md hover:bg-purple-600 transition"
        >
          Create User
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="w-full h-full flex flex-col bg-blue-500">
      <BrowserRouter>
        <nav className="w-full flex flex-row justify-around items-center p-4 bg-pink-700 text-white shadow-md">
          <Link
            className="hover:underline hover:scale-105 transition-transform duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline hover:scale-105 transition-transform duration-300"
            to="/grid"
          >
            Grid
          </Link>
          <Link
            className="hover:underline hover:scale-105 transition-transform duration-300"
            to="/view"
          >
            View
          </Link>
          <Link
            className="hover:underline hover:scale-105 transition-transform duration-300"
            to="/create"
          >
            Create
          </Link>
           <Link
            className="hover:underline hover:scale-105 transition-transform duration-300 "
            to="/Update"
          >
            Update
          </Link>
        </nav>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/view" element={<View />} />
          <Route path="/create" element={<CreateUpdate />} />
          <Route path="/Update" element={<CreateUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
