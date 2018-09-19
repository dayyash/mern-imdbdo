import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MovieList from './MovieList';
import MovieEntryForm from './MovieEntryForm';
import 'whatwg-fetch';

class MovieBox extends React.Component {
    constructor() {
        super();
        this.state = { 
            data: [],
            error: null,
            title: '',
            description: '',
            releaseDate: null
        };
        this.pollInterval = null;
    }

    componentDidMount() {
        this.loadMovies();
        if(!this.pollInterval) {
            this.pollInterval = setInterval(this.loadMovies, 2000);
        }
    }

    componentWillMount() {
        if(this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }

    onChangeText = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    submitMovie = () => {
        const { title, description, releaseDate } = this.state;
        const data = [...this.state.data, { title, description, releaseDate }];
        this.setState({data});
        fetch('/api/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, releaseDate }),
        })
        .then(res => res.json())
        .then((res) => {
            if(!res.success) this.setState({error: res.error.message || res.error});
            else this.setState({ title: '', description: '', error: null});
        });
    }

    loadMovies = () => {
        fetch('/api/movies')
        .then(data => data.json())
        .then((res) => {
            if(!res.success) this.setState({error: res.error});
            else this.setState({data: res.data});
        });
    }

    render() {
        return (
            <div className="container">
                <div className="movies">
                    <MovieList data={this.state.data} />
                </div>
                <div className="form">
                    <MovieEntryForm
                        title={this.state.title}
                        description={this.state.description}
                        releaseDate={this.state.releaseDate}
                        handleChangeText={this.onChangeText}
                        submitMovie={this.submitMovie}
                    />
                </div>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}
export default MovieBox;