import Header from "../components/feautures/header/header";
import Cards from "../components/Cards/cards";
import './layout.css'

const Layout = () => {
  return (
    <div className='body'>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Layout;
