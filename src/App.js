import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Blog from './components/Blogs'
import Program from './components/Programs'
import Missing from './components/Missing'
import Footer from './components/Footer'
import {  Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/programs" component={Program} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
