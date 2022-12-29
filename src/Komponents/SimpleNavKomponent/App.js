import React from 'react'
import Cart from './Cart';
import Counter from './Counter';
import Greeter from './Greeter'
import MoodToggler from './MoodToggler';
import NavBar from './NavBar'

const items = [
  {
    id: 1,
    name: "taco seasoning",
    price: 3.99,
    qty: 4,
  },
  {
    id: 2,
    name: "pinto beans",
    price: 5.99,
    qty: 3,
  },
  {
    id: 3,
    name: "sour cream",
    price: 1.99,
    qty: 9,
  },
];

const App = () => {
  return (
    <div>
      <Cart firstItems={items} />
      <hr/>
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
