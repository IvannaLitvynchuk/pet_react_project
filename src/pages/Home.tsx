import React from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate();
    const onClickMainBtn = () => {
        navigate("/store")
    }

    
    return (
        <div className="container">
            <div className="bg-home">
                <div className="text-content">
                    <div className="main-title">
                        <h1>Крутий вислів про книги</h1>
                    </div>
                    <div className="main-subtitle">
                        <p> img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                    </div>
                    <button onClick={onClickMainBtn} className="main-btn">go to the store</button>
                </div>
                <div className="img-content">
                    <img src="https://cdn.pixabay.com/photo/2015/04/12/08/09/books-718583_1280.png" />
                </div>
                
            </div>
        </div>
    )
}
export default Home;
