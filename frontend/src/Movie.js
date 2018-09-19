import React from 'react';
import { Media } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Movie = props => (

            <div className="singleMovie">
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="thumbnail.png" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{props.title}</Media.Heading>
                        <p>{props.description}</p>
                        <p>{props.releaseDate}</p>
                    </Media.Body>
                </Media>
            </div>
);

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
};

export default Movie;