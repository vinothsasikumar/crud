import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateUpdate from './components/CreateUpdate';
import Grid from './components/Grid';
import View from './components/View';
import OrderGrid from './components/OrderGrid';
import OrderCreateUpdate from './components/OrderCreateUpdate';
import OrderView from './components/OrderView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Grid />} />
          <Route path='/create' element={<CreateUpdate />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/update' element={<CreateUpdate />} />
          <Route path='/view' element={<View />} />
          
          {/* Order Routes */}
          <Route path='/orders' element={<OrderGrid />} />
          <Route path='/order/create' element={<OrderCreateUpdate />} />
          <Route path='/order/update' element={<OrderCreateUpdate />} />
          <Route path='/order/view' element={<OrderView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;