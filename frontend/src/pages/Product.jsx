// library
import React from 'react';
// components
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import Breadcrumb from '../components/Breadcrums/Breadcrumb';
// styles
import './CSS/Product.css';
// context
import { ShopContext } from '../Context/ShopContext';
// hooks
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

export default function Product() {
  const { AllProduct } = React.useContext(ShopContext);
  const { productId } = useParams();
  const currentProduct = AllProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrumb product={currentProduct} />
      <ProductDisplay product={currentProduct} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}
