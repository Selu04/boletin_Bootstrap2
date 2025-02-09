import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Servicios
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Servicios 1</a></li>
                            <li><a className="dropdown-item" href="#">Servicios 2</a></li>
                            <li><a className="dropdown-item" href="#">Servicios 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}