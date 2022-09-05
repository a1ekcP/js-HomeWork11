import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ContextValues from '../context/ContextValues';

function CartItem(props){
    const {cart} = props;
    const {addProd, removeProd, clickRemove} = useContext(ContextValues);

    return <>
        <ListGroup.Item className='d-flex justify-content-between text-reset bg-info'>
            <div>
                {cart.brand} {cart.model} ({cart.price}UAH)
            </div>
            <div>
                <Badge onClick={()=> clickRemove(cart.id)} className='mx-4' bg="danger">Remove</Badge>
                <Button onClick={()=> removeProd(cart.id)} variant="warning" className={cart.count === 1 ? 'bg-opacity-50' : 'bg-opacity-100'} disabled = {cart.count === 1}>-</Button>
                <div className={'count-span d-inline-block mx-2'}>{cart.count}</div>
                <Button onClick={()=> addProd(cart.id)} variant="success">+</Button>
            </div>
        </ListGroup.Item>
    </> 
}

export default CartItem;