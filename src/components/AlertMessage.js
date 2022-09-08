import './style.css';
import Alert from 'react-bootstrap/Alert';
import ContextTheme from '../context/ContextTheme';
import { useContext } from 'react';

function AlertMessage(){
    const {alert} = useContext(ContextTheme);
    

    return <>
        {alert ? alert.map((el, index) =>  <Alert key={index} variant={'success'} className={ 'alertMessage' }>
                {el}
            </Alert>) : []}
    </> 
}

export default AlertMessage;