import React from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';

const cardProject = (props) => {
    return (
        <Card className="border-0 rounded-0 mb-4">
            <CardBody>
                <CardImg top width="100%" src={props.image} alt="Card image cap" className="mb-3"/>
                <h5>{props.title}</h5>
                <CardText className="text-primary cursor-pointer my-2">{props.type}</CardText>
                <small className="text-muted text-capitalize">{props.date}</small>
            </CardBody>
        </Card>
    );
};

export default cardProject;