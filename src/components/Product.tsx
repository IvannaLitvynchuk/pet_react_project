import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    return (
        <div className="product-item">
            {product.title}
            <img src={product.image} style={{width: "100px", height: "100px"}} />
        </div>
    )
}