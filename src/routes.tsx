import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { CurrentOrder } from './pages/CurrentOrder';

import { Header } from './components/Header';

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/current-order" element={<CurrentOrder />} />
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
};
