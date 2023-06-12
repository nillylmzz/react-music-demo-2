import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Menu from './routes/Menu';
import Podcast from './routes/Podcast';
import Favori from './routes/Favori';
import Uyelik from './routes/Uyelik';
import SignIn from './routes/sign-in/sign-in';



function App() {
  return (  
    <div className="App">
    <Routes>
      <Route path='/' element={<Menu/>}>
        <Route  index element={<Home/>}></Route>
        <Route path='/Podcast' element={<Podcast/>}></Route>
        <Route path='/Favori' element={<Favori/>}></Route>
        <Route path='/Uyelik' element={<Uyelik/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
      </Route>
    </Routes>



    </div>
  );
}

export default App;
