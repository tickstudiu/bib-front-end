import React from 'react';
import {
    Card, CardImg, CardBody, CardSubtitle
} from 'reactstrap';

const cardWithImage = (props) => {
    return (
        <div>
            <Card className="border-0">
                <CardImg top width="100%" src={props.image} alt="Card image cap" className="rounded-circle"/>
                <CardBody className="text-center">
                    <h5>{props.title}</h5>
                    <CardSubtitle className="text-muted">{props.subtitle}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default cardWithImage;