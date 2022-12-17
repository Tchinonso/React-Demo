import React from "react"
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import View from "../View";
import Edit from "../Edit";



const Profile = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <h1>profile page</h1>
      <ul>
        <li>
          <Link to={`${url}/view`}>View</Link>
        </li>
        <li>
          <Link to={`${url}/edit`}>Edit profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/view`} component={View}/>
        <Route path={`${path}/edit`} component={Edit}/>
      </Switch>
    </>
  );
  
}

export default Profile
