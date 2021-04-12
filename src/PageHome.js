import './blog.css';
import Header from './components/header'

function PageHome() {
  return (
    <div className="PageHome">
      <Header currentLink="home" />
    </div>
  );
}

export default PageHome;