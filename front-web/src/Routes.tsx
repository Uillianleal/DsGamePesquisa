import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Records from './pages/Records';

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/records">
            <Records />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
