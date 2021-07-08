import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return(
            <div className='navbar-container'>
                <nav className='navbar'>
                    <ul>
                        <li><Link to='/'>Home</Link></li> 
                        <li><Link to='/beers'>Beers</Link></li>
                        <li><Link to='/random-beer'>Random Beer</Link></li>
                        <li><Link to='/new-beer'>New Beer</Link></li>
                    </ul>
                </nav>

            </div>

        )
    }
}

export default Navbar;