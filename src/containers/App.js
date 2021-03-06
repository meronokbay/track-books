import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import Track from '../components/Track';
import Progress from '../components/Progress';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <ToastContainer />
    <Header />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <ProtectedRoute exact path="/add-book" component={AddBook} />
      <ProtectedRoute exact path="/track" component={Track} />
      <ProtectedRoute exact path="/progress" component={Progress} />
      <ProtectedRoute component={AddBook} />
    </Switch>
  </BrowserRouter>
);

export default App;
