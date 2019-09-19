import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

class JumboText extends Component {
    render() {
        return (
            <div className="bg-jumboText text-white">
                <Jumbotron style={{background: 'rgba(0,0,0,0.2)', padding: '8rem 0'}}>
                    <Container>
                        <h1 className="display-4 text-uppercase">Develop for the event</h1>
                        <hr className="my-2"/>
                        <p className="lead">For use in collecting running statistics, which will collect 2 types of data: BIB and time</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default JumboText;