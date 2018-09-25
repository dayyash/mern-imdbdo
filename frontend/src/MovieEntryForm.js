import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Button } from 'react-bootstrap';

const MovieEntryForm = props => (
     
     <form onSubmit={props.submitMovie}>
          <FormControl
                type="text"
                name="title"
                placeholder="Title"
                value={props.title}
                onChange={props.handleChangeText}
            />
            <FormControl
                type="text"
                name="description"
                placeholder="Plot Summary"
                value={props.description}
                onChange={props.handleChangeText}
            />
            <FormControl
                type="text"
                name="releaseDate"
                placeholder="To be changed later"
                value={props.releaseDate}
                onChange={props.handleChangeText}
            />
            <Button type="submit">Submit</Button> 
    </form>
       
);

MovieEntryForm.propTypes = {
    submitMovie: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    releaseDate: PropTypes.instanceOf(Date),
    handleClose: PropTypes.func,
    handleShow: PropTypes.func,
    show: PropTypes.bool,
};

MovieEntryForm.defaultProps = {
    title: '',
    description: '',
    releaseDate: null,
    show: false,
};

export default MovieEntryForm;