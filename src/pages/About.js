import React, {Component} from 'react';

import {Container, Jumbotron, Row, Col} from 'reactstrap';

import Jumbotext from '../components/jumbotext.component';
import CardProject from '../components/cardProject.component';

import BIBImage from '../logo.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <Jumbotext/>
                <Container>
                    <p className="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut <a href="">enim ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </Container>
                <div className="bg-white">
                    <Container>
                        <Jumbotron className="bg-transparent mb-0">
                            <h3 className="text-center text-capitalize">About Me</h3>
                            <p className="lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Jumbotron>
                    </Container>
                </div>
                <Container>
                    <Jumbotron className="bg-transparent mb-0">
                        <h3 className="text-center text-capitalize">Other projects</h3>
                        <div className="divider my-3"/>
                    </Jumbotron>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <CardProject image={BIBImage} title="BiB project for checkpoint" type="service" date="08 september"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
