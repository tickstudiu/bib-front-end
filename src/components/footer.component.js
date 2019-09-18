import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div>
                <Container className="py-4">
                    <hr/>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <h6>BiB</h6>
                            <p className="text-muted">Is a website created for use in work checkpoint runs for soft event phuket</p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className="text-capitalize">menu</h6>
                            <ul className="list-unstyled text-capitalize">
                                <li><Link to='/'>home</Link></li>
                                <li><Link to='/create'>create</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className="text-capitalize">contact us</h6>
                            <ul className="list-unstyled text-muted">
                                <li>Facebook: <a href="https://www.facebook.com/sliple.ness">Wanchalerm Suksawat</a></li>
                                <li>Gmail: tickstudiu@gmail.com</li>
                                <li>Line: Wanchalerm</li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className="text-capitalize">another service</h6>
                            <ul className="list-unstyled text-muted">
                                <li>none</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-dark">
                <Container className="text-muted py-3 text-center">
                    Create by tickstudiu@gmail.com
                </Container>
            </div>
        </div>
    );
};

export default Footer;