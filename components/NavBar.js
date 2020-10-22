import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand" href="/">
                <i class="far fa-address-card"></i>
                {' '}
                Insurance Info
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/items">
                            Items
                            {' '}
                            <i class="fas fa-box-open"></i>
                            </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Configuration
                            {' '}
                            <i class="fas fa-cogs"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/categories">Categories</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/conditions">Conditions</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/companies">Companies</a>
                            <a class="dropdown-item" href="/contacts">Contacts</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/contracts">Contracts</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/locations">Locations</a>
                            <a class="dropdown-item" href="/rooms">Rooms</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}