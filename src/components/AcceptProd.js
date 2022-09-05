import Button from 'react-bootstrap/Button';
import ContextValues from '../context/ContextValues';
import React, { useContext, useState } from 'react';
import ContextTheme from '../context/ContextTheme';

function AcceptProd(){
    const {user} = useContext(ContextValues);
    const [showAccept, setShowAccept] = useState(false);
    const {setAlert} = useContext(ContextTheme);

    function acceptClick(){
        setShowAccept(true);
        setAlert([...alert, 'Accept your order']);
    }

    return <>
        <Button onClick={() => acceptClick()} variant="primary">Accept</Button>
        <div className={showAccept ? 'd-block' : 'd-none'}>
            hallo <span className='user-color'>{user.login}</span>, your order was sent to <span className='user-color'>{user.email}</span>.
        </div>
    </>
}

export default AcceptProd;