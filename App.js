import logo from './logo.svg';
import './App.css';
// import Nav from './Components/Common/Nav';
import Footer from './Components/Common/Footer';                                                                  
import Content from './Components/Common/Content';
import Header from './Components/Common/Header';
import ShowPost from './Components/Artist/ShowPost';
import {  Router, Route,Switch,Redirect } from "react-router-dom";

function App() {
  return (
    <>
        <Header></Header>                                                                                                             
      {/* <Nav></Nav> */}
      {/* <CreatePost></CreatePost> */}
      {/* <Content></Content> */}
      <Footer></Footer>
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={post} />
        {/* <Route path="/contactus" component={ContactUs} /> */}
        {/* <Redirect to="/" />
      </Switch>
    </Router> */}
  </> 
);
}
   
 
export default App;
