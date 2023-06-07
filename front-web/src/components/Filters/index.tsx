import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  link: string;
  linkText: string;
};

function Filters({ link, linkText }: Props) {
  return (
    <div className="filters-container records-actions">
      <Link to={link}>
        <button className="action-filters">{linkText}</button>
      </Link>
    </div>
  );
}

export default Filters;
