import { useParams } from "react-router-dom";
import { products } from "./product-data";
import ProductDetail from "./product-detail";
import ProductList from "./product-list";

const Product = () => {
  const params = useParams();
  const data = products;

  if (!params.id) return <ProductList data={data} />;
  else return <ProductDetail data={data} id={params.id} />;
};

export default Product;
