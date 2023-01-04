
import React, {useContext} from "react";
import { Product } from "../components/Product";
import { useProduct } from "../hook/products";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { ModalContext } from "../context/ModalContext";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { IProduct } from "../models";



const Store = () => {
    const { products, addProduct, loading, error} = useProduct()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    
    return (
        <div className="container">
            <div className="bg-store">
                <h1 className="title-page-store">Store books <button className="btn-add-book" onClick={open}>+</button></h1>
                {modal && 
                        <Modal title="Create new Book" onClose={close}>
                            <CreateProduct onCreate={createHandler} />
                        </Modal>
                    }
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
