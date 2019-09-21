import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar light expand="lg" style={{padding: '1.25rem 0'}} className="bg-white">
                    <Container>
                        <NavbarBrand href="/">
                            <img src="../logo.png" alt="logo" width="30px" height="30px" className="mr-2"/>
                            BiB
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto text-uppercase" navbar>
                                <NavItem>
                                    <NavLink href="/" className="small font-weight-bolder text-dark">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about" className="small font-weight-bolder text-dark">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact" className="small font-weight-bolder text-dark">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact" className="small font-weight-bolder text-dark">Service</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
        );
    }
}