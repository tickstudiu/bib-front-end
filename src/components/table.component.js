import React from 'react';
import {Table, Collapse, ModalBody, Button, Modal} from 'reactstrap';
import Moment from 'react-moment';
import WarningImage from "../assets/images/warning.png";

export default class table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            collapseTable: false,
            collapseModal: false
        };
    }

    toggleTable = () => {
        this.setState(state => ({ collapseTable: !state.collapseTable }));
    };

    toggleModal = () => {
        this.setState(state => ({ collapseModal: !state.collapseModal }));
    };


    render() {
        return (
            <div>
                <p onClick={this.toggleTable} className={this.state.collapseTable ? "cursor-pointer text-muted": "cursor-pointer text-primary"}>{this.state.collapseTable ? "Hidden table": "Show table"}</p>
                <Collapse isOpen={this.state.collapseTable}>
                <Table>
                    <thead>
                    <tr>
                        <th>#BIB</th>
                        <th>Time</th>
                        <th>Option</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.bibsData.map((bibData, index) => {
                            if (bibData.bib_id === this.props.id)
                                return(
                                    <tr key={index}>
                                        <th scope="row">{bibData.tag}</th>
                                        <td><Moment format="HH:mm:ss">{bibData.time}</Moment></td>
                                        <td>
                                            <small className="text-danger cursor-pointer" onClick={() => {
                                                this.toggleModal();
                                                this.setState({id: bibData._id})
                                            }}>delete</small>{' '}
                                            <small className="text-secondary cursor-pointer" onClick={() => this.props.UpdateRoute(bibData._id)}>edit</small>
                                        </td>
                                    </tr>
                                )
                        })
                    }
                    </tbody>
                </Table>
                </Collapse>

                <Modal isOpen={this.state.collapseModal} toggle={this.toggleModal} centered>
                    <ModalBody className="text-center">
                        <section className="mb-4">
                            <img src={WarningImage} alt="warning image" height="100px" width="100px"/>
                            <h3 className="my-4">Are you sure ?</h3>
                            Do you really want to delete these records ? this process cannot be undone.
                        </section>
                        <section>
                            <Button color="secondary" onClick={this.toggleModal} className="mr-3">Cancel</Button>
                            <Button color="danger" onClick={() => {
                                this.props.handleDelete(this.state.id);
                                this.toggleModal();
                            }}>Delete</Button>
                        </section>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}