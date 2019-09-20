import React from 'react';

import { connect } from 'react-redux';

import { fetchBibById, fetchBibData, createBibData, deleteBibData } from '../stores/actions';

import { Container, Row, Col, Button } from 'reactstrap';

import Spinner from '../components/spinner.component';
import Table from '../components/table.component';
import Keypad from  '../components/keypad.component';

class Add extends React.Component {

    state = {
        bib: {},
        bibsData: [],
        isLoading: true,
        isSending: false,
        tag: '',
    };

    componentDidMount() {
        this.props.fetchBibById(this.props.match.params.id, () => {
            this.setState({ bib: this.props.bibStore.bib });
        });

        this.props.fetchBibData(() => {
            this.setState({ bibsData: this.props.bibDataStore.bibsData })
        });
        this.setState({ isLoading: false });
    }

    handleTag = (newNum) => {
        this.setState({ tag: this.state.tag + newNum });
    };

    clearTag = () => {
        this.setState({ tag: '' })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isSending: true });

        const newBib = {
            bib_id: this.state.bib._id,
            tag: this.state.tag,
        };

        this.props.createBibData(newBib, () => {
            this.setState({ isSending: false });
            this.clearTag();

            this.props.fetchBibData(() => {
                this.setState({ bibsData: this.props.bibDataStore.bibsData })
            });
        });
    };

    handleDelete = (id) => {
        this.props.deleteBibData(id, () => {
            this.props.fetchBibData(() => {
                this.setState({ bibsData: this.props.bibDataStore.bibsData })
            });
        })
    };

    UpdateRoute = (id) => {
        this.props.history.push(`/update/${id}`);
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
                        <Table bibsData={this.state.bibsData} id={this.state.bib._id} handleDelete={this.handleDelete} UpdateRoute={this.UpdateRoute}/>
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

const mapStateToProps = ({bibStore, bibDataStore}) => {
    return {
        bibStore, bibDataStore
    }
};

export default connect(mapStateToProps, { fetchBibById, fetchBibData, createBibData, deleteBibData })(Add);