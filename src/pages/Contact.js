import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

export default class Contact extends Component {
    render() {
        return (
            <Container className="py-5">
                <Row>
                    <Col lg={6} sm={12}>
                        <h2 className="text-capitalize">contact info;</h2>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="mb-3"><strong className="text-capitalize">address</strong>: 10111 consectetur adipiscing elit, sed 12345</div>
                        <div className="mb-3"><strong className="text-capitalize">phone</strong>: +66 1234 56789</div>
                        <div className="mb-3"><strong className="text-capitalize">email</strong>: admin@email.com</div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Form>
                            <FormGroup className="mb-4">
                                <Input type="text" placeholder="Your Name" className="border-0 rounded-0"/>
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input type="email" placeholder="Your Email" className="border-0 rounded-0"/>
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input type="text" placeholder="Your Title" className="border-0 rounded-0"/>
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input type="textarea" name="text"  placeholder="Your Comment" className="border-0 rounded-0"/>
                            </FormGroup>
                            <Button className="text-uppercase rounded-0" color="primary">send</Button>
                        </Form>
                    </Col>
                </Row>
                <div className="d-lg-block d-none" style={{height: '28vh'}}>{' '}</div>
            </Container>
        )
    }
}
