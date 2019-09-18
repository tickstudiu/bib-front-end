import React from 'react';
import { Table, Collapse } from 'reactstrap';
import Moment from 'react-moment';

export default class table extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render() {
        return (
            <div>
                <p onClick={this.toggle} className={this.state.collapse ? "cursor-pointer text-muted": "cursor-pointer text-primary"}>{this.state.collapse ? "Hidden table": "Show table"}</p>
                <Collapse isOpen={this.state.collapse}>
                <Table>
                    <thead>
                    <tr>
                        <th>#BIB</th>
                        <th>Time</th>
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
                                    </tr>
                                )
                        })
                    }
                    </tbody>
                </Table>
                </Collapse>
            </div>
        );
    }
}