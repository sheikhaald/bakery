import "./App.css";
import bakeries from "./products";

function App() {
  const bakerymenu = bakeries.map((bakery) => {
    return (
      <div className="bake">
        <h1>{bakery.name}</h1>
        <h2>{bakery.price}</h2>
        <img src={bakery.image} width="250px" />
      </div>
    );
  });

  return (
    <div className="logo">
      <h1>MY Pink Bakery</h1>
      <p>bake with love</p>
      <header className="App-header">
        <img
          src="https://s-media-cache-ak0.pinimg.com/736x/d5/e6/12/d5e612b085c50ac2c0034ff14d90e01f--door-county-wisconsin-pink-stuff.jpg"
          className="App-logo"
          alt="logo"
        />
      </header>
      {bakerymenu}
    </div>
  );
}

export default App;
