import bakeries from "../products";
import ProductItem from "./ProductItem";
const ProductList = () => {
  const bakerymenu = bakeries.map((bakery) => {
    return <ProductItem bakery={bakery} />;
  });

  return <div className="props">{bakerymenu} </div>;
};
export default ProductList;
