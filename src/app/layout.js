import Header from "../components/features/header/header";
import Cards from "../components/Cards/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import './layout.css'

const Layout = () => {
  return (
    <div className='container-fluid d-flex custom-width bg-dark rounded-2'>
      <div className='d-flex flex-row position-relative'>
        <Header></Header>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Layout;
