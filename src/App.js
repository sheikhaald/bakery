import "./App.css";
import bakeries from "./products";
import HomeItem from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="logo">
      <HomeItem />
      <ProductList />
    </div>
  );
}

export default App;
