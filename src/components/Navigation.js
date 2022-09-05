import '../App.css';
import Nav from 'react-bootstrap/Nav';
import ContextTheme from '../context/ContextTheme';
import ChangeTheme from './ChangeTheme';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    const {user} = useContext(ContextTheme)

    return <div className='d-flex align-items-center justify-content-between'>
        <Nav variant="pills" defaultActiveKey="/Homepage">
            <Nav.Item>
                <Nav.Link eventKey="link-1">
                    <Link className='text-light text-decoration-none d-block' to='/'>Main</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">
                    <Link className='text-light text-decoration-none d-block' to='/Products'>Products</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">
                    <Link className='text-light text-decoration-none d-block' to='/UserCabinet'>UserCabinet</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <ChangeTheme/>
        <div className='d-flex flex-column'>
            <img src='https://w7.pngwing.com/pngs/849/177/png-transparent-computer-icons-username-monochrome-human-log-in.png' style = {{width: 50}} alt="logo"/>
            {user.login}
        </div>
    </div>
     
}

export default Navigation;