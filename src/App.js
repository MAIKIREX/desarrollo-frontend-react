import './App.css';
//import Default from './screens/Default';
//import FilterableProductTable from "./screens/Product"

import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <>
        <Navbar/>
        <Outlet />
      </>
    </div>
  );
}

export default App;
