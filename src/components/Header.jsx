import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Hamburguer from "./Hamburguer";
import './Header.css';

const Header = (props) => {
  const [date, setDate] = useState();

  useEffect(() => {
    let newDate = new Date();
    newDate = newDate.toUTCString().replace(',', '');
    setDate(newDate.slice(0, newDate.length - 7));
  }, []);
  return (
    <>
      <div className="header">
        <Hamburguer />
        <h1 className="logo">The Bridge Times</h1>
        <div className="user-login">⚇</div>
      </div>
      <div className="date-susc">
        <div>
          <div>{date}</div>
        </div>
        <div>
          <div>Suscribe for free!</div>
        </div>
      </div>
      <Categories updateCategory={(newCategory) => props.updateCategory(newCategory)} />
      
      <div className="latest"></div>
    </>
  );
};

export default Header;
