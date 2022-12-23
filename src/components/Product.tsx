import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);


    return (
        <div className="product-item">
            <img className="product-img" src={product.image} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price}$</p>
            <button className="product-btn" onClick={() => setDetails(prev => !prev)}>
                {details ? "Hide details" : "Show details"}
            </button>
            {details ?
                <p className="product-description">{product.description}</p>
            :
                ""
            }
            
        </div>
    )
}