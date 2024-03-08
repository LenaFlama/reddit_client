/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Search from "../features/header/search/search";
import Categories from "../features/header/categories/categories";
import { Outlet, NavLink } from "react-router-dom";
import { Offcanvas, Tooltip } from "bootstrap";

export default function Header() {
  useEffect(() => {
    var offcanvasElementList = [].slice.call(
      document.querySelectorAll(".offcanvas")
    );
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new Offcanvas(offcanvasEl);
    });

    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  });

  let navBar = (
    <ul className='nav d-grid col mb-auto'>
      <li className='nav-item m-0'>
        <NavLink
          className='nav-link fs-2 text-light p-0 d-flex flex-row align-items-end p-2'
          aria-label='Home'
          to='/home'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill='currentColor'
            className='bi bi-house'
            viewBox='0 0 16 16'
          >
            <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z' />
          </svg>
          <div className='d-flex ms-2'>Home</div>
        </NavLink>
      </li>
      <li className='nav-item'>
        <Search />
      </li>
      <li className='nav-item'>
        <NavLink
          className='nav-link fs-2 text-light p-0 d-flex flex-row align-items-end p-2'
          aria-label='New'
          to='/new'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
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
          className='nav-link fs-2 text-light p-0 d-flex flex-row align-items-end p-2'
          aria-label='Popular'
          to='/popular'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
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
        <Categories />
      </li>
      <Outlet></Outlet>
    </ul>
  );

  return (
    <div className='d-md-grid'>
      <div className='d-md-none d-grid align-items-start h-100'>
        <button
          className='btn btn-dark p-1 position-sticky top-0'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasScrolling'
          aria-controls='offcanvasScrolling'
        >
          <span
            className='m-0 p-0'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
            title='Menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-list h-100'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
              />
            </svg>
          </span>
        </button>
        <nav
          className='offcanvas text-bg-dark offcanvas-start navbar container-fluid d-grid col-2 navbar-dark p-3 pt-0 nav-pills m-0 navbar-expand-sm align-items-start justify-content-start'
          data-bs-scroll='true'
          data-bs-backdrop='false'
          tabIndex='-1'
          id='offcanvasScrolling'
          aria-labelledby='offcanvasScrollingLabel'
        >
          <div className='d-flex p-0 position-sticky top-0 pt-4'>
            {navBar}
            <button
              type='button'
              className='btn-close btn-close-white ms-2'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
        </nav>
      </div>
      <nav className='d-none navbar container-fluid d-md-grid col-3 navbar-dark p-3 pt-0 nav-pills m-0 navbar-expand-sm align-items-start justify-content-start'>
        <div className='p-0 position-sticky top-0 pt-4'>{navBar}</div>
      </nav>
    </div>
  );
}
