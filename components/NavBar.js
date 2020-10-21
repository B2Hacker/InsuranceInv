import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM, { render } from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    rootAppBar: {
        flexGrow: 1,
    },
}));

export default function NavBar(props) {
    const classes = useStyles();


    const [expanded, setExpanded] = React.useState(false);
    const [menuExpanded, setMenuExpanded] = React.useState(false);

    const toggleMenuExpanded = () => {
        if (expanded) {
            setMenuExpanded(true)
            return;
        }
        const currentState = menuExpanded;
        setMenuExpanded(!currentState);
    };


    return (
        <>
            <div className={classes.rootAppBar}>
                <Navbar collapseOnSelect expanded={expanded} expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Insurance Info</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" onClick={toggleMenuExpanded}>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}