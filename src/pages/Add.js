import React from 'react';
import axios from "axios";

import { Container, Row, Col, Button } from 'reactstrap';

import { RootUrl } from "../config";

import Spinner from '../components/spinner.component';
import Table from '../components/table.component';
import Keypad from  '../components/keypad.component';

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
        axios.get(`${RootUrl}/bibs/${this.props.match.params.id}`)
            .then(res => {
                const bib = res.data;
                this.setState({ bib });
            });

        axios.get(`${RootUrl}/bibsData/`)
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

        axios.post(`${RootUrl}/bibsData/add`, newBib)
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
                                        <li><h5>Distance: {this.state.bib.distance}</h5></li>
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
                        <Keypad handleTag={this.handleTag} handleSubmit={this.handleSubmit} isSending={this.state.isSending}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}