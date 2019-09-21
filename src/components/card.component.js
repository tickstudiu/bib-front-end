import React from 'react';
import Moment from 'react-moment';

import WarningImage from '../assets/images/warning.png';

import {
    Card, CardText, CardBody,
    CardTitle, Button, Modal, ModalBody
} from 'reactstrap';
import ReactStars from 'react-stars';

export default class card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return (
            <Card className="hover-shadow mb-4">
                <CardBody>
                    <div className="d-flex justify-content-between">
                        <CardTitle className="text-primary cursor-pointer" onClick={() => this.props.AddRoute(this.props.id)}>{this.props.title}</CardTitle>
                        <div>
                            <small className="text-danger cursor-pointer" onClick={this.toggle}>delete</small>{' '}
                            <small className="text-secondary cursor-pointer" onClick={() => this.props.UpdateRoute(this.props.id)}>edit</small>
                        </div>
                    </div>
                    <h6 className="text-capitalize">Checkpoint: {this.props.checkpoint}</h6>
                    <h6 className="text-capitalize">distance: {this.props.distance}</h6>
                    <CardText>{this.props.description}</CardText>
                    <CardText className="d-flex justify-content-between align-items-center">
                        <small className="text-muted"> <Moment fromNow>{this.props.date}</Moment></small>
                        <ReactStars count={1} value={0} size={24} color2={'#ffd700'} half={false}/>
                    </CardText>
                </CardBody>

                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalBody className="text-center">
                        <section className="mb-4">
                            <img src={WarningImage} alt="warning image" height="100px" width="100px"/>
                            <h3 className="my-4">Are you sure ?</h3>
                            Do you really want to delete these records ? this process cannot be undone.
                        </section>
                        <section>
                            <Button color="secondary" onClick={this.toggle} className="mr-3">Cancel</Button>
                            <Button color="danger" onClick={() => {
                                this.props.deleteBib(this.props.id);
                                this.toggle();
                            }}>Delete</Button>
                        </section>
                    </ModalBody>
                </Modal>
            </Card>
        );
    }
};