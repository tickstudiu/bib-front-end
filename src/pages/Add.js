import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from "axios";

import Spinner from '../components/spinner.component';
import Table from '../components/table.component';

export default class Add extends React.Component {

    state = {
        bib: {},
        bibsData: [],
        isLoading: true,
        isSending: false,
        tag: '',
    };

    componentDidMount() {
        this.getBib();
    }

    getBib = () => {
        axios.get(`http://localhost:5000/bibs/${this.props.match.params.id}`)
            .then(res => {
                const bib = res.data;
                this.setState({ bib });
            });

        axios.get(`http://localhost:5000/bibsData/`)
            .then(res => {
                const bibsData = res.data;
                this.setState({ bibsData });
                this.setState({ isLoading: false });
            });
    };

    handleTag = (newNum) => {
        this.setState({
            tag: this.state.tag + newNum
        });
    };

    clearTag = () => {
        this.setState({
            tag: ''
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isSending: true });

        const newBib = {
            bib_id: this.state.bib.id,
            tag: this.state.tag,
        };

        axios.post(`http://localhost:5000/bibsData/add`, newBib)
            .then(() => {
                this.setState({ isSending: false });
                this.clearTag();
            })
    };

    render(){
        return(
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        {
                            this.state.isLoading ?
                                <Spinner/>
                                :
                                <div>
                                    <h1 className="display-4 text-capitalize">{this.state.bib.title}</h1>
                                    <ul className="list-unstyled">
                                        <li><h5>Checkpoint: {this.state.bib.checkpoint}</h5></li>
                                        <li><h5>Distance{this.state.bib.distance}</h5></li>
                                    </ul>
                                </div>
                        }
                        <Table bibsData={this.state.bibsData} id={this.state.bib.id}/>
                    </Col>
                    <Col lg={6} md={12}>
                        <header className="d-flex justify-content-between align-items-center">
                            <h1 className="display-4 text-capitalize">{this.state.tag ?  this.state.tag: 'no bib'}</h1>
                            <div>
                                <Button color="danger" size="sm" onClick={this.clearTag}>Clear</Button>
                            </div>
                        </header>
                        <section>
                            <Row>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('1')} style={{height: '120px'}} className="mb-3"outline><h1 className="display-4">1</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('2')} style={{height: '120px'}} className="mb-3"outline><h1 className="display-4">2</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('3')} style={{height: '120px'}} className="mb-3"outline><h1 className="display-4">3</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('4')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">4</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('5')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">5</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('6')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">6</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('7')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">7</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('8')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">8</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" onClick={() => this.handleTag('9')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">9</h1></Button>
                                </Col>
                                <Col xs={{size: 4, offset: 4}}>
                                    <Button block size="lg" onClick={() => this.handleTag('0')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">0</h1></Button>
                                </Col>
                                <Col xs={4}>
                                    <Button block size="lg" color="primary" style={{height: '120px'}} className="mb-3" onClick={this.handleSubmit} disabled={this.state.isSending}><h1>{this.state.isSending ? 'w8' : 'X'}</h1></Button>
                                </Col>
                            </Row>
                        </section>
                    </Col>
                </Row>
            </Container>
        )
    }
}