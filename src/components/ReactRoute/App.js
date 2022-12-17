import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./Header";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Post from "./Pages/Post";
import { useState } from "react";

function App() {
  
const [login,setLogin] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={ () => setLogin(!login) }>{ login ? "log out" : "login"}</button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile">
            {/* { login ? <Profile /> : <Redirect to='/' />} */ }
            <Profile />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
