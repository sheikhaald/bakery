const ProductItem = (props) => {
  return (
    <>
      <h1>{props.bakery.name}</h1>
      <h2>{props.bakery.price}</h2>
      <img src={props.bakery.image} width="250px" />
    </>
  );
};
export default ProductItem;
