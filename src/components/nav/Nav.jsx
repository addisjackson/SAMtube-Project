import { Link } from "react-router-dom";
import SearchBar from "./Search";
/**
 * Nav()
 * -----------------------------
 * a component for navbar.
 * ToDo: this one is just template, we need to decide the layout for it.
 * @returns 
 */
export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <p><Link className="navbar-brand" to="/">SAMtube</Link></p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Popular posts <span className="text-warning">(NOT OPEN)</span></a>
                        </li>
                        <li>
                            <SearchBar />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}