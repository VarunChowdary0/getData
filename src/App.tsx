import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import NOTFOUND from './components/NOTFOUND';
import LandingPage from './components/LandingPage';
import Login from './components/Registering/Login';
import SignUp from './components/Registering/SignUp';

const router = createBrowserRouter([
  {
    path : '/',
    element:
      <LandingPage/>
  },
  {
    path: "home/:id",
    element:
    <Home id={':id'}/>
  },
  {
    path : ":path",
    element : 
    <>
      <NOTFOUND rout=':path'/>
    </>
  },{
    path : "login",
    element : 
      <Login/>
  },{
    path : "signup",
    element :
    <SignUp/>
  }
])

const App:React.FC = () =>{
  return(
    <>
      <div className='dark:bg-[#121212] h-screen w-screen select-none'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
