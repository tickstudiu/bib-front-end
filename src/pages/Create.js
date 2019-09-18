import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from "axios";
export default class Create extends React.Component {

    state = {
        title: '',
        description: '',
        checkpoint: '1',
        distance: '5',
        bibs: [],
        loading: true,
    };

    componentDidMount() {
        this.getBib();
    }

    getBib = () => {
        axios.get(`http://localhost:5000/bibs`)
            .then(res => {
                const bibs = res.data;
                this.setState({ bibs });
                this.setState({ loading: false });
            })
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const newBib = {
            id: this.state.bibs.length + 1,
            title: this.state.title,
            description: this.state.description,
            distance: this.state.distance,
            checkpoint: this.state.checkpoint
        };

        axios.post(`http://localhost:5000/bibs/add`, newBib)
            .then(() => {this.setState({ loading: false });})
    };

    render(){
        return(
            <Container>
                <h5>Create Form</h5>
                <hr/>
                <Form>
                    <FormGroup>
                        <Label>Title <span className="text-danger">*</span></Label>
                        <Input type="text" name="title" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Distance <span className="text-danger">*</span></Label>
                        <Input type="select" name="distance" required onChange={this.handleChange}>
                            <option value="5">5 Km</option>
                            <option value="10">10 Km</option>
                            <option value="21.5">21.5 Km</option>
                            <option value="42">42 Km</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Checkpoint <span className="text-danger">*</span></Label>
                        <Input type="select" name="checkpoint" required onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="finish">finish</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" name="description" row="3" onChange={this.handleChange}/>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <Button color="primary" onClick={this.handleSubmit} disabled={this.state.loading}>{this.state.loading ? 'Loading':'Create'}</Button>
                </Form>
                <div className="d-lg-block d-none" style={{height: '225px'}}></div>
            </Container>
        )
    }
}
