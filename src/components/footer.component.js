import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container className="py-4">
                <hr/>
                <Row>
                    <Col lg={5} md={6} sm={12}>
                        <h6 className="text-capitalize mb-3">wanlerm's portfolio</h6>
                        <p className="text-muted">© Copyright 20?? Lorem ipsum dolor sit <br/>amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <ul className="list-unstyled text-muted">
                            <li>tickstudiu@gmail.com</li>
                            <li>0123456789</li>
                        </ul>
                    </Col>
                    <Col lg={1} md={6} sm={6} xs={6}>
                        <ul className="list-unstyled text-capitalize">
                            <li><Link to='/' className="text-muted">home</Link></li>
                            <li><Link to='/create' className="text-muted">contact</Link></li>
                            <li><Link to='/create' className="text-muted">about</Link></li>
                            <li><Link to='/create' className="text-muted">service</Link></li>
                        </ul>
                    </Col>
                    <Col lg={1} md={6} sm={6} xs={6}>
                        <ul className="list-unstyled text-capitalize">
                            <li><Link to='/' className="text-muted">bib</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={6} sm={12}>
                        <ul className="list-unstyled text-muted">
                            <li><a href="" className="text-muted">facebook</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;