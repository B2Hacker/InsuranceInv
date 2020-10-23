export default function Footer() {
    return (
        <nav className="navbar navbar-expand-sm sticky-bottom navbar-light bg-success">
                    <p className="text-white">
                        &copy;{new Date().getFullYear()} Insurance Information
                    </p>
        </nav>
    );
}

