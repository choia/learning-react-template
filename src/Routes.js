import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Ingredient from './ingredients/Ingredient';
import Recipe from './recipes/Recipe';
import ShoppingList from './shopping-lists/ShoppingList';

const routes = [
  { path: '/', Component: Home, exact: true },
  { path: '/add', Component: Ingredient },
  { path: '/recipe', Component: Recipe },
  { path: '/shopping', Component: ShoppingList }
];

const Routes = () => {
  return (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key = {index}
          path = {route.path}
          exact = {route.exact}
        >
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
  );
}

export default Routes;