
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* lhttp://localhost:3000 */}
        <Route path='/' element={<Admin/>}/>
        {/* http://localhost:3000/add */}
        <Route path='add' element={<Add/>}/>
        {/* http://localhost:3000/view/3 */}
        <Route path='view/:id' element={<View/>}/>
          {/* http://localhost:3000/edit/3 */}
          <Route path='edit/:id' element={<Edit/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
