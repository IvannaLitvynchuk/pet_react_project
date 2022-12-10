
import React from "react";
import { Product } from "../components/Product";
import { useProduct } from "../hook/products";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";



const Store = () => {
    const { products, addProduct, loading, error} = useProduct()

    
    return (
        <div className="container">
            <div className="bg-store">
                <h1 className="title-page-store">Store books</h1>
                <div className="products-box">
                    {loading && <Loader />}
                    { error && <ErrorMessage error={error} /> }
                    {products.map(product => <Product product={product} key={product.id} /> )}
                </div>
            </div>
        </div>
    )
}
export default Store;
