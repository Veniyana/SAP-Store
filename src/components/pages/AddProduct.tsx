import React, { useState } from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const saveProduct = () => {
    const newProduct = {
      name,
      price: parseFloat(price),
      image
    };
    dispatch(addProduct(newProduct));
    history.push("/");
  };

  return (
    <div className="addProduct">
      <Typography variant="h6" className="header">
        Add a product
      </Typography>
      <FormControl className="content">
        <div className="addProductDetails">
          <TextField
            id="addProductName"
            label="Product name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <TextField
            id="addProductPrice"
            label="Price"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
          />
        </div>
        <TextField
          id="addProductUrl"
          label="Image URL"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
        />
        <Button className="addProductBtn" onClick={saveProduct}>
          Save
        </Button>
      </FormControl>
    </div>
  );
};

export default AddProduct;
