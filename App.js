import React , {Fragment} from 'react';
import Login from './Login'
import MainMenu from './MainMenu'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import { BrowserRouter,Route ,Switch} from "react-router-dom";
const App = () => {
  return (
    <Fragment>
<BrowserRouter>
  <Route path="/" exact component={Login}/>
  <Route path="/CreateUser" exact component={CreateUser}/>
<Route path="/MainMenu" exact strict component={MainMenu}/>
<Route path="/UpdateUser" exact component={UpdateUser}/>
</BrowserRouter>
          </Fragment>
  )
}

export default App;
