import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

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
                    <Navbar.Brand href="/">
                    <i class="fas fa-address-card"></i>
                    {' '}
                    Insurance Info
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" onClick={toggleMenuExpanded}>
                            <Nav.Link href="/items">Items</Nav.Link>
                            <NavDropdown title="Configuration" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/conditions">Conditions</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/companies">Companies</NavDropdown.Item>
                                <NavDropdown.Item href="/contacts">Contacts</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/contracts">Contracts</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/locations">Locations</NavDropdown.Item>
                                <NavDropdown.Item href="/rooms">Rooms</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}