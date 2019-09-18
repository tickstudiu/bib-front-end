import React from 'react';
import Moment from 'react-moment';
import {
    Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';

const card = (props) => {
    return (
        <Card className="hover-shadow mb-4">
            <CardBody>
                <div className="d-flex justify-content-between">
                    <CardTitle><a href="" onClick={() => props.AddRoute(props.id)}>{props.title}</a></CardTitle>
                    <small className="text-danger cursor-pointer" onClick={() => props.deleteBib(props.id)}>delete</small>
                </div>
                <h6 className="text-capitalize">Checkpoint: {props.checkpoint}</h6>
                <h6 className="text-capitalize">distance: {props.distance}</h6>
                <CardText>{props.description}</CardText>
                <CardText>
                    <small className="text-muted"> <Moment fromNow>{props.date}</Moment></small>
                </CardText>
            </CardBody>
        </Card>
    );
};

export default card;