import React from "react";
class Navbar extends React.Component{
    render(){

        return(
            <React.Fragment>

<nav class="navbar navbar-expand-lg navbar-info bg-dark">
  <a class="navbar-brand" href="#">React</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>
  </div>
</nav>
            </React.Fragment>
        )
    }


}
export default Navbar;