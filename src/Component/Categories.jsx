import React from 'react';
import "../Css/Category.css";

const Category= () =>{
    return (
        <>
        <div className="Category-container">
            <div className="top-category">
                <p>Category</p>
                </div>
                <div className="bottom-category-tot">
                <div className="bottom-category">
                    <div className="real-estate">
                        <p>Realestate</p>
                        <div className="realstate-a">
                        <a href="">Apartments</a>
                        <a href="">Bussiness and Shops</a>
                        <a href="">Commercial Building</a>
                        <a href="">Flats and Apartments</a>
                        </div>
                    </div>
                    <div className="Automobiles">
                        <p>Automobiles</p>
                        <div className="Automobiles-a">
                        <a href="">Apartments</a>
                        <a href="">Bussiness and Shops</a>
                        <a href="">Commercial Building</a>
                        <a href="">Flats and Apartments</a>
                        </div>
                    </div>
                    <div className="electronics">
                        <p>Electronics</p>
                        <div className="electronics-a">
                        <a href="">Apartments</a>
                        <a href="">Bussiness and Shops</a>
                        <a href="">Commercial Building</a>
                        <a href="">Flats and Apartments</a>
                        </div>
                    </div>
                </div>
                </div>
            
        </div>
        </>
    )
}
export default Category;