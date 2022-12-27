import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../models";
import { Modal } from "./Modal";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const {modal, open, close} = useContext(ModalContext)
    const onOpenModal = () => {
        open()
        setDetails(prep => !prep)
        console.log(product.id)
    }


    return (
        <>
            <div className="product-item">
            <img className="product-img" src={product.image} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price}$</p>
            <button className="product-btn" onClick={onOpenModal}>
                Show details
            </button>
        </div>
        { details ?
        <>
            {modal &&
                <Modal title={product.title} onClose={close}>
                    <div>
                        <img className="product-img" src={product.image} />
                        <p className="product-price">{product.price}$</p>
                        <p className="product-description">{product.description}</p>
                        <div className="product-rating">
                            <p>Rate: <span>{product.rating.rate}</span></p>
                            <p>Count: <span>{product.rating.count}</span></p>
                        </div>
                    </div>
                    
                </Modal>
            }
        </>
            :
            ""
        }
        
        </>
        
    )
}