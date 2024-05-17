import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import Home from './components/Home'
import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="card">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
