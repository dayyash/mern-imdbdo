import React from 'react';
import Movie from './Movie';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MovieEntryForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = { 
            title: '',
            description: '',
            releaseDate: null,
            show: false
         };
    }

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow() {
        this.setState({ show: true });
      }
    
    render() {
        return(
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                Add Movie
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie Entry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>
                    {/* <form onSubmit={this.props.submitMovie}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.props.title}
                            onChange={this.props.handleChangeText}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Plot Summary"
                            value={this.props.description}
                            onChange={this.props.handleChangeText}
                        />
                        <input
                            type="text"
                            name="releaseDate"
                            placeholder="To be changed later"
                            value={this.props.releaseDate}
                            onChange={this.props.handleChangeText}
                        />
                        <button type="submit">Submit</button>
                    </form> */}
                    </h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

MovieEntryForm.propTypes = {
    submitMovie: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleShow: PropTypes.func.isRequired,
    show: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    releaseDate: PropTypes.instanceOf(Date)
}

export default MovieEntryForm;