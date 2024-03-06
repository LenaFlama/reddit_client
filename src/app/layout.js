import Header from "../components/features/header/header";
import Cards from "../components/Cards/cards";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <div className='container-fluid bg-light w-75 mt-2 bg-dark rounded-2'>
      <div className='row '>
        <Header></Header>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Layout;
