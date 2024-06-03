/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Search from "./features/header/search/search";
import Categories from "./features/header/categories/categories";
import LogIn from "../app/logIn";
import { Outlet, NavLink } from "react-router-dom";
import { Offcanvas } from "bootstrap";

export default function Header() {
  useEffect(() => {
    var offcanvasElementList = [].slice.call(
      document.querySelectorAll(".offcanvas")
    );
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new Offcanvas(offcanvasEl);
    });
  });

  let navBar = (
    <ul className='nav d-grid col mb-auto'>
      <li className='nav-item m-0'>
        <NavLink
          className='nav-link fs-3 text-light d-flex flex-row align-items-center p-0 mx-1 ps-1'
          aria-label='Home'
          to='/home'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className='bi bi-house'
            viewBox='0 0 16 16'
          >
            <path
              d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z'
              fill='#FF4500'
            />
          </svg>
          <div className='d-flex ms-2' style={{ color: "#FF4500" }}>
            Home
          </div>
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          className='nav-link fs-3 text-light d-flex flex-row align-items-center p-0 mx-1 ps-1'
          aria-label='New'
          to='/new'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className='bi bi-cup-hot'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175'
            />
            <path d='m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8' />
          </svg>
          <div className='d-flex ms-2 justify-content-center'>New</div>
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          className='nav-link fs-3 text-light d-flex flex-row align-items-center p-0 mx-1 ps-1'
          aria-label='Popular'
          to='/popular'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className='bi bi-newspaper'
            viewBox='0 0 16 16'
          >
            <path d='M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z' />
            <path d='M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z' />
          </svg>
          <div className='d-flex ms-2'>Popular</div>
        </NavLink>
      </li>
      <li className='nav-item'>
        <Search />
      </li>
      <li style={{ color: "white" }} className='mt-1'>
        <hr className='my-2' />
      </li>
      <li className='nav-item'>
        <NavLink
          className='nav-link fs-4 text-light d-flex flex-row align-items-center p-0 mx-1 ps-1'
          aria-label=''
          to='/LogIn'
        >
          <div className='d-flex'>Log In</div>
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink
          className='nav-link fs-4 text-light d-flex flex-row align-items-center p-0 mx-1 ps-1'
          aria-label=''
          to=''
        >
          <div className='d-flex'>Sign Up</div>
        </NavLink>
      </li>
      <li style={{ color: "white" }} className='mt-1'>
        <hr className='my-2' />
      </li>
      <li className='nav-item'>
        <Categories />
      </li>
      <li style={{ color: "white" }} className='mt-1'>
        <hr className='my-2' />
      </li>
      <Outlet></Outlet>
    </ul>
  );

  let bottom = (
    <div className='d-flex position-sticky align-items-end h-100 pt-3 mb-2'>
      <a href='https://www.facebook.com/reddit' aria-label='Facebook'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-facebook mx-2'
          viewBox='0 0 16 16'
        >
          <path
            d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951'
            fill='#1877F2'
          />
          <link href='https://www.facebook.com/reddit'></link>
        </svg>
      </a>
      <a href='https://www.instagram.com/reddit/' aria-label='Instagram'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-instagram mx-2'
          viewBox='0 0 16 16'
        >
          <path
            d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'
            fill='#C13584'
          />
        </svg>
      </a>
      <a href='https://x.com/reddit' aria-label='Twitter X'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-twitter-x mx-2'
          viewBox='0 0 16 16'
        >
          <path
            d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'
            fill='#FFFFFF'
          />
        </svg>
      </a>
      <a href='https://www.youtube.com/c/reddit' aria-label='Youtube'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-youtube mx-2'
          viewBox='0 0 16 16'
        >
          <path
            d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z'
            fill='#FF0000'
          />
        </svg>
      </a>
    </div>
  );

  return (
    <div className='d-md-grid'>
      <div className='d-md-none d-grid align-items-start h-100'>
        <button
          className='btn btn-dark position-sticky top-0 mt-3 p-1 pt-0'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasScrolling'
          aria-controls='offcanvasScrolling'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className='bi bi-list'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
              fill='#FF4500'
            />
          </svg>
        </button>
        <nav
          className='offcanvas text-bg-dark offcanvas-start navbar container-fluid d-grid navbar-dark p-3 pt-0 nav-pills m-0 navbar-expand-sm align-items-start justify-content-start'
          data-bs-scroll='true'
          data-bs-backdrop='false'
          tabIndex='-1'
          id='offcanvasScrolling'
          style={{ width: "15em" }}
          aria-labelledby='offcanvasScrollingLabel'
        >
          <div className='d-flex p-0 position-sticky top-0 pt-4 h-100'>
            {navBar}
            <button
              type='button'
              className='btn-close btn-close-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          {bottom}
        </nav>
      </div>
      <nav className='d-none navbar container-fluid d-md-grid col-3 navbar-dark p-3 pt-0 nav-pills m-0 navbar-expand-sm align-items-start justify-content-start'>
        <div className='p-0 position-sticky top-0 pt-4'>
          {navBar}
          {bottom}
        </div>
      </nav>
    </div>
  );
}
