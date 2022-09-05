import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';

function CountProduct(props){
    const {filteredProducts} = props;
    const [countPrices, setCountPrices] = useState([]);

    useEffect(()=>{
        setCountPrices(filteredProducts.reduce((acc, el)=>{
          return acc + (el.price*el.count);
        }, 0))
      }, [filteredProducts])

    return <>
      <ListGroup variant="flush">
        {filteredProducts.map(el => <CartItem key={el.id} cart={el}/>)}
      </ListGroup>
      <h3 className='mt-4 text-decoration-underline'>Total Price: {countPrices} UAH</h3>
    </>
}

export default CountProduct;