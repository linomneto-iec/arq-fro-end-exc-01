import logo from './logo.svg';
import './Blog.css';
import { Link } from 'react-router-dom';

function pagina404() {
  return (
    <div className="Sobre">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página não encontrada
        </p>
        <Link to="/home">Ir para a página Home \o/</Link><br />
        <Link to="/sobre">Ir para a página Sobre \o/</Link>
      </header>
    </div>
  );
}

export default pagina404;
