import { faChartPie, faPlus, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="Nav">
    <Link to="/add-book">
      <FontAwesomeIcon icon={faPlus} size="lg" />
      <span>Add Book</span>
    </Link>
    <Link to="/track">
      <FontAwesomeIcon icon={faPoll} size="lg" />
      <span>Track</span>
    </Link>
    <Link to="/progress">
      <FontAwesomeIcon icon={faChartPie} size="lg" />
      <span>Progress</span>
    </Link>
  </nav>
);

export default Nav;
