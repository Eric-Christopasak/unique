import LG from '../assets/logo.png';
import {Link} from 'react-router-dom';
function NavScrollExample() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/"><img src={LG} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown px-4">
                            <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Men
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-4">
                            <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Women
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item px-4">
                            <Link className="nav-link text-white" to="/track">Track Order</Link>
                        </li>
                        <li className="nav-item dropdown px-4">
                            <Link className="nav-link text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Best Offer
                            </Link>
                            
                        </li>
                    </ul>
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <ul className='list-unstyled d-flex me-5 mb-2 mb-lg-0'>
                                    <li><Link to=""><i className=" fs-4 text-white bi bi-person-circle px-3"></i></Link></li>
                                    <li><Link to=""><i className=" fs-4 text-white bi bi-cart4 px-3"></i></Link></li>
                                    <li><Link to=""><i className=" fs-4 text-white bi bi-heart-fill px-3"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavScrollExample;