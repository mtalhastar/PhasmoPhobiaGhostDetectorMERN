import{BrowserRouter,Routes,Route} from 'react-router-dom';
import SecondPage from './pages/SecondPage'
import EvidencePage from './pages/EvidencePage'
import GhostPage from './pages/GhostPage'
import GamePage from './pages/GamePage'
import Test from './pages/Test'
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
         <Routes>
           <Route
           path="/test"
           element= {<Test/>}
            />
        </Routes>
        <Routes>
           <Route
           path="/EvidencePage"
           element= {<EvidencePage/>}
            />
        </Routes>
        <Routes>
           <Route
           path="/GhostPage"
           element= {<GhostPage/>}
            />
        </Routes>
        <Routes>
           <Route
           path="/GamePage"
           element= {<GamePage/>}
            />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
