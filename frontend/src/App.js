import{BrowserRouter,Routes,Route} from 'react-router-dom';
import SecondPage from './pages/SecondPage'
import NavBar from './component/Navbar'
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <div >
        <Routes>
           <Route
           path="/"
           element= {<SecondPage/>}
            />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
