import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ContextValues from '../context/ContextValues';

function Product({product}){
    const {clickRemove, clickAdd} = useContext(ContextValues);

    return <Col>
        <Card className={'text-black'}>
            <Card.Img height={500} variant="top" src={product.imgSrc} />
            <Card.Body>
                <Card.Title>{product.brand} {product.model}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <div>{product.price} UAH</div>
            {
            !product.addToCart ? 
            <Button onClick={()=>clickAdd(product.id)} className='m-4' variant="primary">ADD TO CART</Button> : 
            <Button onClick={()=>clickRemove(product.id)} className='m-4' variant="danger">REMOVE FROM CART</Button>
            }
        </Card>
    </Col>
}

export default Product;