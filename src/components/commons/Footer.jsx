import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="page-footer fixed-bottom w-100">
            <div className="p-1 bg-warning text-dark text-md-center w-100 text-sm-left fs-6 d-md-table">
                <div className="d-md-table-row d-sm-inline">
                    <p>
                        Copyright <strong>SAMTube 2023</strong>
                    </p>
                </div>
            </div>
        </footer>
    )
}