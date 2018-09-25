import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MovieList from './MovieList';
import MovieEntryForm from './MovieEntryForm';
import 'whatwg-fetch';
import { Button } from 'react-bootstrap';

class MovieBox extends React.Component {
    constructor() {
        super();
        this.state = { 
            data: [],
            error: null,
            title: '',
            description: '',
            releaseDate: null,
            editId: null,
            show: false
        };
        // this.pollInterval = null;
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
   }


   handleClose() {
    //    const newState = this.state.show;
    this.setState({ show: false });
  }

handleShow() {
    // const newState = this.state.show;
    this.setState({ show: true });
  }
    
    componentDidMount() {
        this.loadMovies();
        // if(!this.pollInterval) {
        //     this.pollInterval = setInterval(this.loadMovies, 2000);
        // }
    }

    componentWillMount() {
        // if(this.pollInterval) clearInterval(this.pollInterval);
        // this.pollInterval = null;
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

    onUpdateMovie = (id) => {
        const oldMovie = this.state.data.find(c => c._id === id);
        if (!oldMovie) return;
        this.setState({title: oldMovie.title, description: oldMovie.description, releaseDate: oldMovie.releaseDate, editId: id});
    }
    
  submitMovieEdits = (id) => {
    const { title, description, releaseDate, editId } = this.state.data.find(c => c._id === id);
    fetch(`/api/comments/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, releaseDate }),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ title: '', description: '', releaseDate: null, editId: null });
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
                    <MovieList 
                        data={this.state.data}
                        handleUpdateMovie={this.onUpdateMovie}    
                    />
                </div>
                <div className="form">
                    <MovieEntryForm
                            title={this.state.title}
                            description={this.state.description}
                            releaseDate={this.state.releaseDate}
                            handleChangeText={this.onChangeText}
                            submitMovie={this.submitMovie}
                            show-={this.state.show}
                            handleClose={this.handleClose}
                            handleShow={this.handleShow}
                    />
                </div>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}
export default MovieBox;