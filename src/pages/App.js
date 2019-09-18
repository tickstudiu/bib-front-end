import React from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';

import { RootUrl } from "../config";

import Card from '../components/card.component';
import CardWithImage from '../components/cardWithImage.component';
import Spinner from '../components/spinner.component';

export default class App extends React.Component {
    state = {
        bibs: [],
        loading: true,
    };

    componentDidMount() {
        this.getBib();
    }

    getBib = () => {
        axios.get(`${RootUrl}/bibs`)
            .then(res => {
                const bibs = res.data;
                this.setState({ bibs });
                this.setState({ loading: false });
            })
    };

    deleteBib = (id) => {
        axios.delete(`${RootUrl}/bibs/${id}`)
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
    };

    AddRoute = (id) => {
        this.props.history.push(`/add/${id}`);
    };

    render(){
        return(
            <Container>
                <header className="text-center">
                    <img src="../logo.png" alt="logo" width="150px" height="150px" className="mb-3"/>
                    <h4 className="text-capitalize display-4">BiB</h4>
                    <p className="text-muted">Create by tickstudiu@gmail.com</p>
                </header>

                <section className="mb-5">
                    <h5 className="text-capitalize">lists</h5>
                    <hr/>
                    <Row>
                        {
                            this.state.loading ?
                                <Col lg={4} md={6} sm={12}><Spinner/></Col>
                                :
                                this.state.bibs.map((bib,index) => (
                                    <Col lg={4} md={6} sm={12} key={index}>
                                        <Card title={bib.title} checkpoint={bib.checkpoint} distance={bib.distance}
                                              description={bib.description} date={bib.date} id={bib._id} deleteBib={this.deleteBib} AddRoute={this.AddRoute}/>
                                    </Col>
                                ))
                        }
                    </Row>
                </section>

                <section>
                    <h3 className="text-capitalize text-center">Teams</h3>
                    <p className="text-muted text-center lead">Or Not?</p>
                    <Row>
                        <Col lg={{size: 4, offset: 2}} md={6} sm={12}>
                            <CardWithImage image="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/29511536_1762161747178929_6797966305692918382_n.jpg?_nc_cat=104&_nc_oc=AQkqe9c1QsdZ4yWhlmFIHScvhoBX2-yMMwYsLUpPYDrwRan8vtTBclRFikdq_0xBd_I&_nc_ht=scontent.fbkk5-5.fna&oh=03ed877b3a15df20ee3e4c7f6eaeda16&oe=5E062D08" title="Wanchalerm Suksawat" subtitle="Hello
I'm Nice. I created and designed all of the websites you are using."/>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <CardWithImage image="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/54256491_2329708513707924_7002357028328833024_n.jpg?_nc_cat=108&_nc_oc=AQnBY1iasknq0QVFXyGZySTW7fLcSmr2FngNqJpfHg7YK6N8c0HJ1hIcYI0Xn0RMWeY&_nc_ht=scontent.fbkk5-7.fna&oh=810cae3f2527f68097984214c0cc8dc7&oe=5DFA58DB" title="Chanakarn Maimak" subtitle="Hello
I'm Mook. I didn't do much, just encouraged Nice."/>
                        </Col>
                    </Row>
                </section>

            </Container>
        )
    }
}
