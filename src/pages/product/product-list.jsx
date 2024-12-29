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
          inputGroupClass="flex-grow-1"
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
      </div>
      <div className="product-table">
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
                  <Link to={`/products/${product.id}`}>
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
