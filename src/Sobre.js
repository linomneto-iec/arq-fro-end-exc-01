import logo from './logo.svg';
import './Blog.css';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="Sobre">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sobre este blog
        </p>
        <Link to="/">Ir para a página Home \o/</Link>
      </header>
    </div>
  );
}

export default Sobre;
