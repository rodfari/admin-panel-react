import React from "react";
import InputGroup from "../../components/UI/forms/InputGroup";
import Button from "../../components/Template/Button";
import Icon from "../../components/Template/Icon";
import { Link } from "react-router-dom";
import { products } from "./product-data";

const ProductList = () => {
  return (
    <>
      <div className="filter">
        <InputGroup
          labelContent="Search"
          placeholder="Search for a product..."
          inputGrouId="search"
          inputType="text"
          GroupClass="flex-grow-1"
          inputProps={{
            onChange: () => {
              console.log("input change");
            },
          }}
        />
        <InputGroup
          labelContent="Initial Date"
          inputGrouId="date"
          inputType="date"
        />
        <InputGroup
          labelContent="Final Date"
          inputGrouId="date"
          inputType="date"
        />
        <div>
          <Button className="btn-primary">
            search
            <Icon name="icon-search" />
          </Button>
        </div>
      </div>
      <div className="product-table">
        <div className="add-product">
          <Button>
            New product
            <Icon name="icon-plus-circle" />
          </Button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.total}</td>
                <td>
                  <Link to={`/products/${product.id}`} className="btn-primary">
                    <Icon name="icon-edit-3" />
                  </Link>
                </td>
                <td>
                  <Button className="btn-danger">
                    <Icon name="icon-trash-2" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
