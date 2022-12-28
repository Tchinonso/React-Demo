import React from 'react'
import Counter from './Counter';
import Greeter from './Greeter'
import MoodToggler from './MoodToggler';
import NavBar from './NavBar'

const App = () => {
  return (
    <div>
      <Counter step={10} />
      <hr />
      <Counter />
      <hr />
      <MoodToggler />
      <hr />
      <NavBar />
      <hr />
      <Greeter name="Tchinonso" age="27" happy={5} />
      <Greeter name="Destiny" happy={3} />
      <Greeter name="Igwe" />
      <hr />
    </div>
  );
}

export default App
