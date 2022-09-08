import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

function SingleProduct(){
    const {id} = useParams();
    const [singleProduct, setSingleProducts] = useState({});
    const products = useOutletContext();

    useEffect(() => {
        if(products?.length){
            setSingleProducts(products.filter(el => el.id == id)[0]);
        }
    }, [products, id])

    return (
        <Col>
            <h1 className="mt-5 text-light text-uppercase">Product: {singleProduct.brand} {singleProduct.model} {singleProduct.price} UAH</h1>
        </Col>
    )
}

export default SingleProduct;