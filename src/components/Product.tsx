import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    return (
        <div className="product-item">
            <img className="product-img" src={product.image} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price}$</p>
            <button className="product-btn">show details</button>
        </div>
    )
}