import React from 'react';
import "./style.scss";
import { NavLink, Link } from 'react-router-dom';
import SiteLogo from "./../../assets/images/site-logo.svg"
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";



const index = () => {
   return (
     <header className="header">
       <div className="container">
         <nav className="nav">
           <Link to="" className="nav__logo-link">
             <img
               src={SiteLogo}
               alt="site logo"
               className="nav__logo-link-img"
             />
           </Link>
           <div className="nav__menu-box">
             <ul className="nav__menu-list">
               <li className="nav__menu-item">
                 <NavLink to="/Бренды" className="nav__menu-item-link">
                   Бренды
                 </NavLink>
               </li>
               <li className="nav__menu-item">
                 <NavLink to="/Продукты" className="nav__menu-item-link">
                   Продукты
                 </NavLink>
               </li>
               <li className="nav__menu-item">
                 <NavLink
                   to="/Сервисная-служба"
                   className="nav__menu-item-link"
                 >
                   Сервисная служба
                 </NavLink>
               </li>
               <li className="nav__menu-item">
                 <NavLink to="/Новости" className="nav__menu-item-link">
                   Новости
                 </NavLink>
               </li>
               <li className="nav__menu-item">
                 <NavLink to="/Контакты" className="nav__menu-item-link">
                   Контакты
                 </NavLink>
               </li>
             </ul>
           </div>
           <div className="nav__icon-box">
             <ul className="nav__icon-list">
               <li className="nav__icon-item">
                 <a href="" target="_blank" className="nav__icon-item-link">
                   <FaFacebookF className="nav__icon-item-link-img" />
                 </a>
               </li>
               <li className="nav__icon-item">
                 <a href="" target="_blank" className="nav__icon-item-link">
                   <BsInstagram className="nav__icon-item-link-img" />
                 </a>
               </li>
               <li className="nav__icon-item">
                 <a href="" target="_blank" className="nav__icon-item-link">
                   <FaTelegramPlane className="nav__icon-item-link-img" />
                 </a>
               </li>
               <li className="nav__icon-item">
                 <a href="" target="_blank" className="nav__icon-item-link">
                   <BsTwitter className="nav__icon-item-link-img" />
                 </a>
               </li>
             </ul>
             <a href="tel:+998901234567" className="nav__icon-box-link">
               +998 90 123-45-67
             </a>
           </div>
         </nav>
       </div>
     </header>
   );
};

export default index;