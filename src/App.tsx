import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Create from './components/Create';
import Grid from './components/Grid';
import View from './components/View';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;