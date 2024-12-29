import React from "react";
import Card from "../../components/Template/Card";
import InputGroup from "../../components/UI/forms/InputGroup";

const ProductDetail = ({ data, id }) => {
  const product = data.find((p) => p.id == id);
  return (
    <>
      <Card
        header="Product"
        footerSettings={{
          saveButton: true,
          cancelButton: true,
        }}
      >
        <InputGroup
          labelContent="Product name"
          placeholder="Product name"
          inputGrouId="product-name"
          inputType="text"
          value={product.name}
        />

        <InputGroup
          labelContent="Amount"
          placeholder="product amount"
          inputGrouId="product-amount"
          inputType="number"
          value={product.quantity}
        />

        <InputGroup
          labelContent="Price"
          placeholder="product price"
          inputGrouId="product-price"
          inputType="text"
          value={`$${product.price}`}
        />

        <InputGroup
          labelContent="Total"
          placeholder="product total"
          inputGrouId="product-total"
          inputType="text"
          value={`${product.total}`}
        />
      </Card>
    </>
  );
};

export default ProductDetail;
