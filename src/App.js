
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Add } from './components/Add';
import { WatchedPage } from './components/WatchedPage';
import { WatchList } from './components/WatchList';
import { GlobalProvider } from "./context/GlobalState"
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route path="/watched" component={WatchedPage} />
          <Route path="/add" component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
