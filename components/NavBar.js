import styles from '../styles/Home.module.css';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand mr-3" href="/">
                    <i className="far fa-address-card d-inline-block align-center"></i>
                &nbsp;
                Insurance Info
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav text-center">
                        <a className="nav-item nav-link active" href="/items">
                            Items
                            &nbsp;
                            <i className="fas fa-box-open"></i>
                        </a>
                        <div className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Configuration
                                &nbsp;
                            <i className="fas fa-cogs"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/categories">Categories</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/conditions">Conditions</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/companies">Companies</a>
                                <a className="dropdown-item" href="/contacts">Contacts</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/contracts">Contracts</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/locations">Locations</a>
                                <a className="dropdown-item" href="/rooms">Rooms</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}