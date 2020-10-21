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
                <Navbar fixed="top" expanded={expanded} collapseOnSelect expand="md" bg="dark" variant="dark" className="pl-2 pr-2">
                    <Navbar.Brand href="/">Inurance Info</Navbar.Brand>
                    <>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" onClick={toggleMenuExpanded}>
                                <Link href="/items"><a className="nav-link">Items</a></Link>
                                <NavDropdown title="Setup" id="basic-nav-dropdown" show={expanded || menuExpanded}>

                                    <Link href="/categories">
                                        <NavDropdown.Item href="/categories">
                                            Categories
                      </NavDropdown.Item>
                                    </Link>

                                    <Link href="/conditions">
                                        <NavDropdown.Item href="/conditions">
                                            Conditions
                      </NavDropdown.Item>
                                    </Link>

                                    <NavDropdown.Divider />

                                    <Link href="/locations">
                                        <NavDropdown.Item href="/locations">
                                            Locations
                      </NavDropdown.Item>
                                    </Link>

                                    <Link href="/rooms">
                                        <NavDropdown.Item href="/rooms">
                                            Rooms
                      </NavDropdown.Item>
                                    </Link>

                                    <NavDropdown.Divider />

                                    <Link href="/contacts">
                                        <NavDropdown.Item href="/contacts">
                                            Contacts
                      </NavDropdown.Item>
                                    </Link>

                                    <Link href="/companies">
                                        <NavDropdown.Item href="/companies">
                                            Companies
                      </NavDropdown.Item>
                                    </Link>

                                    <NavDropdown.Divider />

                                    <Link href="/contracts">
                                        <NavDropdown.Item href="/contracts">
                                            Contracts
                      </NavDropdown.Item>
                                    </Link>

                                    <Link href="/policies">
                                        <NavDropdown.Item href="/policies">
                                            Policies
                      </NavDropdown.Item>
                                    </Link>

                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                </Navbar>

                {/* FOOTER */}
                <Navbar fixed="bottom" bg="dark" variant="dark" className="pl-2 pr-2 justify-content-between">
                    <Navbar.Text>myInventory @ 2020</Navbar.Text>
                    <Navbar.Text>version 1.1</Navbar.Text>
                </Navbar>
            </div>
        </>
    );
}