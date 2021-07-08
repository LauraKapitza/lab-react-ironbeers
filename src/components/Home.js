import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Beers from './Beers.js';
import NewBeer from './NewBeer.js';
import RandomBeer from './RandomBeer.js'


class Home extends React.Component {
    render() {
        return(
            <div className='Homepage'>
                <Switch>
                    <Route path='/beers' component={Beers} />
                    <Route path='/random-beer' component={RandomBeer} />
                    <Route path='/new-beer' component={NewBeer} />
                </Switch>

            </div>

        )
    }
}

export default Home;