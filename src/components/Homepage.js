import logo from '../logo.svg';
import '../App.css';

function Homepage(){
    return <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className='text-uppercase'>Wellcome to my page</h1>
    </div>
}

export default Homepage;