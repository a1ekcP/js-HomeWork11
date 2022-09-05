import {  useRef, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContextTheme from '../context/ContextTheme';

function FormGroup(){
    const refName = useRef();
    const refEmail = useRef();
    const checkRef = useRef();
    const isChecked = useRef();
    const [dis, setDis] = useState(true);
    const {setAlert, user, setUser, alert} = useContext(ContextTheme)
    

    function saveUser(){
        setUser({login: refName.current.value, email: refEmail.current.value});
        localStorage.setItem('LastUser', JSON.stringify({login: refName.current.value, email: refEmail.current.value}));
        setAlert([...alert, `wellcome ${refName.current.value}`]);
        refName.current.value = '';
        refEmail.current.value = '';
        setDis(checkRef.current.disabled = true);
        isChecked.current.checked = false;
    }
    
    function isDisabled(){
        setDis(checkRef.current.disabled = false)
    }

    return <Form className='w-75 mx-auto p-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Login: </Form.Label>
            <Form.Control type="text"
            defaultValue={user.login}
                          ref={refName}
                          placeholder="Enter login"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email"
            defaultValue={user.email}
                          ref={refEmail}
                          placeholder="email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" onClick={isDisabled} ref={isChecked}/>
        </Form.Group>
        <Button variant="primary" onClick={saveUser} ref={checkRef} disabled={dis}>
            Submit
        </Button>
    </Form>
}

export default FormGroup;