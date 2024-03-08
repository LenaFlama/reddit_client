import Header from "../components/header";
import Cards from "../components/Cards/cards";
import "./layout.css";

const Layout = () => {
  return (
    <div className='container-fluid d-grid custom-width bg-dark p-0 rounded-2 '>
      <div className='d-flex flex-row justify-content-even'>
        <Header></Header>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Layout;
