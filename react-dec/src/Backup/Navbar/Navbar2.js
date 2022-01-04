import React from "react";
import{Link} from "react-router-dom"
class Navbar2 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="/Movies">React Bang</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Table">Table <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/count">count</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Movie">Movie</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ConditionHandling"> Conditional Rendering</Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to="/Login02 ">Login02</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Dummy">Dummy</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Password">Password</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Hooks">Hooks</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Hooks1">Hooks1</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ClassMate">HookForm</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Redux">Redux</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/redux2">Redux2</Link>
      </li>
    </ul>
  </div>
</nav>


            </React.Fragment>
        )
    }


}
export default Navbar2;