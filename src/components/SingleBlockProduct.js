import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContextTheme from "../context/ContextTheme";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SingleBlockProduct(){
    const { productsArr } = useContext(ContextTheme);
    const [ singleBlockProduct, setSingleBlockProduct ]= useState({})
    const { productId } = useParams();

    console.log(productsArr)
    

    useEffect(() => {
        setSingleBlockProduct(productsArr.filter(el => el.id === +productId)[0]);
    }, [productsArr, productId]);

    console.log(singleBlockProduct)

    return (
        <div className="single-card">
            <Card className={'text-black d-flex flex-row align-center'}>
                <Card.Img variant="top" src={singleBlockProduct.imgSrc} />
                <Card.Body>
                    <Card.Title>{singleBlockProduct.brand}</Card.Title>
                    <Card.Text>
                        {singleBlockProduct.description}
                    </Card.Text>
                    <div>{singleBlockProduct.price} UAH</div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleBlockProduct;