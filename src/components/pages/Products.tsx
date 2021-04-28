import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import productData from "../../mocks/products";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getCounter, getProducts } from "../../redux/selectors";
import { addToCart } from "../../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);
  const products = useSelector(getProducts);

  const addItemToCart = () => {
    const newCounter = counter + 1;
    dispatch(addToCart(newCounter));
  };

  const allProducts = [...productData, ...products];

  const listItems = allProducts.map((product, index) => {
    return (
      <div key={index} className="item">
        <div className="itemImage">
          <img src={product.image} alt="product" />
        </div>
        <div className="itemDetails">
          <div className="productName">
            <p>{product.name}</p>
          </div>
          <div className="addToCartBtn">
            <Button onClick={addItemToCart}>
              <ShoppingCartIcon>Add to cart</ShoppingCartIcon>
            </Button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="productList">{listItems}</div>;
};

export default Products;
