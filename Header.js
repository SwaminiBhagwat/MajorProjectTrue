import React from "react";
import PropTypes from "prop-types";
// import AddProducts from "../Products/AddProducts";
import "../css/Header.css";
// import DisplayProductDetails from "../Products/DisplayProductDetails";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "../css/Nav.css";
import ShowPost from "../Artist/ShowPost";
import AddPost from "../Artist/AddPost";
import Register from "../RegisterNew/Register"
// import ArtistRegistration from "../Artist/ArtistRegistration"

import Content from "./Content"

function Header(props) {
  return (
    <div class="header">
    
    <BrowserRouter>
   
        <ul>
       <li> <h3>Meet Artist</h3></li>
     
        
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Login"> Login</Link>
          </li>

          {/* <li>
            <Link to="/userRegister">User Register</Link>
          </li>*/}

          <li>
            <Link to="/artistLogin">Artist Login HERE</Link>
          </li>

          <li>
            <Link to="/artistRegister">Artist Register</Link>
          </li> 

          <li>
            <Link to="/post">Show Post</Link>
          </li>

          <li>
          <Link to="/addpost"> Add Post</Link>
          </li>

        </ul>

         <Routes>

          <Route path="/" element={<Content/>}>
            {" "}
          </Route>

          {/* <Route path="/userlogin" element={<></>}>
            {" "}
          </Route>

          <Route path="/userRegister" element={<></>}>
            {" "}
          </Route>*/}

          <Route path="/artistlogin" element={<Register/>}>
            {" "}
          </Route> 

          {/* <Route path="/artistRegister" element={<ArtistRegistration/>}>
            {" "}
          </Route> */}

          <Route path="/post" element={<ShowPost />}>
            {" "}
          </Route>

          <Route path="/addpost" element={<AddPost />}>
            {" "}
          </Route>

          {/* <Route path="/getProducts" element={<DisplayProductDetails/>}>
            {" "}
          </Route>  */}
          
         </Routes> 

      </BrowserRouter>
    
    
    </div>
  );
}

Header.propTypes = {};

export default Header;
