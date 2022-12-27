import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import NavMenu from './NavMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ScrollToTop from './ScrollToTop';


  
  
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
