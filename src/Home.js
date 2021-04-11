import logo from './logo.svg';
import './Blog.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem Vindo ao blog do Lino
        </p>
        <Link to="/sobre">Ir para a página Sobre \o/</Link>
      </header>
    </div>
  );
}

export default Home;