import React from 'react'
import "./ProductList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Heading</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consequuntur veniam adipisci eius deleniti ut, quae ipsam quia
                    numquam laboriosam totam, eos asperiores cupiditate nemo, vero
                    tenetur recusandae labore iusto perferendis.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
