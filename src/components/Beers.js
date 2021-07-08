import axios from 'axios';
import {Link} from 'react-router-dom';
import React from 'react';

class Beers extends React.Component {
    state = {
        beers: []
    }

    getBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers') //API link to get an array of all beers
        .then(response => {
            console.log(response)
            this.setState({
                beers: response.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getBeers();
    }

    render() {
        return(
            <section className='NewBeer'>
                    {this.state.beers.map(beer => (
                        <article key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} />
                            <div className='text-container'>
                                <h3><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h3>
                                <p>{beer.tagline}</p>
                                <p>Contributed by <span>{beer.contributed_by}</span></p>
                            </div>
                        </article>
                    ))}
            </section>
        )
    }
}

export default Beers;