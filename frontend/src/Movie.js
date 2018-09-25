import React from 'react';
import { Media, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Movie = props => (

            <div className="singleMovie">
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="thumbnail.png" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{props.title}</Media.Heading>
                        <div className="singleMovieContent">
                            <p>{props.description}</p>
                            <p>{props.releaseDate}</p>
                        </div>
                        <div className="singleMovieButtons">
                            <Button bsStyle="primary" bsSize="small" onClick={() => { props.handleUpdateMovie(props.id);}}>Edit</Button>
                            <Button bsStyle="primary" bsSize="small" onClick={() => { props.handleDeleteMovie(props.id);}}>Delete</Button>
                        </div>
                    </Media.Body>
                </Media>
            </div>
);

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    handleUpdateMovie: PropTypes.func.isRequired,
    handleDeleteMovie: PropTypes.func.isRequired,
};

export default Movie;