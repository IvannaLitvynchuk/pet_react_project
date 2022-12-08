import { resolve } from "path";
import React from "react";



const Store = () => {
    const fakeProduktList = fetch("https://fakestoreapi.com/products").then((resolve) => (resolve.json())).then((json) => console.log(json))
    console.log(fakeProduktList)
    return (
        <div className="container">
            <div className="bg-store">
                <h1 className="title-page-store">Store books</h1>
                <div>
                    {/* {fakeProduktList.map(product => product.id)} */}
                </div>
            </div>
        </div>
    )
}
export default Store;
