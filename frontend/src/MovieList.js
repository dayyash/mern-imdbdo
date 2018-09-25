import React from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

const MovieList = props => {
    const movieNodes = props.data.map(movie => (
        <Movie 
            title={movie.title} 
            description={movie.description} 
            releaseDate={movie.releaseDate} 
            id={movie._id}
            handleUpdateMovie={props.handleUpdateMovie}
            handleDeleteMovie={props.handleDeleteMovie}
            >
        </Movie>
    ));
    return (
        <div>
            { movieNodes }
        </div>
    );
};

MovieList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        id: PropTypes.string,
    })),
    handleDeleteMovie: PropTypes.func.isRequired,
    handleUpdateMovie: PropTypes.func.isRequired,
};

MovieList.defaultProps = {
    data: [],
};

export default MovieList;