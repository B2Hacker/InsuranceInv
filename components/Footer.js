export default function Footer() {
    return (
        <nav className="navbar navbar-light bg-success sticky-bottom">
                    <p className="text-white">
                        &copy;{new Date().getFullYear()} Insurance Information
                    </p>
        </nav>
    );
}

