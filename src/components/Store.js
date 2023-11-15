import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./Store.module.css";
import Loader from './Loader';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container} >
            {
                products.length ?
                products.map(product => <Product 
                            key={product.id} 
                            productData = {product}
                        />) :
                <Loader/>
            }
        </div>
    );
};

export default Store;