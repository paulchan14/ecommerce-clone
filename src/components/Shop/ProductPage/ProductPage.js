import React from 'react';
import LimitedHeader from './LimitedHeader/LimitedHeader';
import FrameHeader from './FrameHeader/FrameHeader';
import RegProductHeader from './RegProductHeader/RegProductHeader';

import products from './sampleProducts';
import { getCurrentProduct } from '../../../utils/fns';
import ProductInfo from './ProductInfo/ProductInfo';

function ProductPage(props) {
    const { productName } = props.match.params;

    const currentProduct = getCurrentProduct(products, productName);
    
    return(
        <main className="product_page">
            {
                currentProduct.edition === "Limited Edition" ? <LimitedHeader product={ currentProduct }/> : currentProduct.edition === "Element Frame" ? <FrameHeader product={ currentProduct }/> : <RegProductHeader product={ currentProduct }/>
            }
            <ProductInfo product={ currentProduct }/>
        </main>
    )
}

export default ProductPage;