import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import Post from "./pages/Post";
import Project from "./pages/Project";

const App = () => {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/post/:slug" component={SinglePost} />
     <Route path="/post" component={Post} />
     <Route path="/project" component={Project} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
