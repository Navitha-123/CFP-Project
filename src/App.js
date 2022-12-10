import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Note1 from './components/takenote1/note1';
import Note2 from './components/takenote2/note2';
import Note3 from './components/takenote3/note3';
import Dashboard from './components/dashboard/dashboard';
import SigninPage from './components/signin/signin';
import SignupPage from './components/signup/signup';
import PrimarySearchAppBar from './components/headermui/header';


function App() {
  return (
    <div className="App">
  <Dashboard/>  

 
   {/*  <PrimarySearchAppBar/> */}
{/*  <Dashboard/> */
}
{/* <SigninPage/> */}
{/*   <Header/> 
 <Note1/> 
 <Note2/>
 <Note3/> */}
 
  {/* <Note1/>
  <Note2/> 
  <Note3/>  */}
   
 {/*  <SigninPage/>
  <SignupPage/> */}
    
    </div>
  );
}

export default App;
