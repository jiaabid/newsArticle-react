import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import SignUp from './SignUp';
import SignIn from './SignIn';
import App from './App';
import Home from './Home';
import PersonalizeFeed from './PersonalizeFeed';
import Error from "./Error"
import "./newsApp.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
        <Routes>
             <Route exact path="/" element={<SignIn/>}/>
             <Route exact path="/signUp" element={<SignUp/>}/>
             <Route exact path="/app" element={<App/>}>                  
             <Route index element={<Home/>}/>         
             <Route exact path="home" element={<Home/>}/>
             <Route exact path="personalizeFeed" element={<PersonalizeFeed/>}/> 
             <Route exact path="newZealand" element={<Home/>}/>
             <Route exact path="world" element={<Home/>}/>
             <Route exact path="decision23" element={<Home/>}/>
             <Route exact path="sport" element={<Home/>}/>
             <Route exact path="entertainment" element={<Home/>}/>
             <Route exact path="lifeStyle" element={<Home/>}/>
             <Route exact path="travel" element={<Home/>}/>
             <Route exact path="technology" element={<Home/>}/>
             <Route exact path="money" element={<Home/>}/>
             <Route exact path="show" element={<Home/>}/>                        
           </Route>
           <Route exact path="*" element={<Error/>}/>

        </Routes>
  
</BrowserRouter>



 );

