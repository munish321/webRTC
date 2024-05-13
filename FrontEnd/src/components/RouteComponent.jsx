import { Route,Routes } from 'react-router-dom';
import MapView from '../pages/MapView.jsx'
import TaskView from '../pages/TaskView.jsx';
import NavBar from '../components/NavBar.jsx';
import LoginView from '../pages/LoginView.jsx';
import WebSocketComponent from '../pages/WebSocketSample.jsx';

export const RouteComponent=()=>{
  return (
    <div>
     <NavBar/>
     <Routes>
         <Route path='/' Component={TaskView} ></Route>
         <Route path="/mapview" Component={MapView} ></Route>
         <Route path="/login" Component={LoginView} ></Route>
         <Route path="/web" Component={WebSocketComponent} ></Route>
     </Routes>
    </div>
  )
}
