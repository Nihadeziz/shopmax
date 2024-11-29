import React from 'react'
import style from './Header.module.css'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className={style.container}>


        <div className={style.logo}>
          <p>SHOPMAX</p>
        </div>
        <div className={style.navbar}>
          <nav>
            <ul>
              <li className={style.drop}><a href="">HOME <p>\/</p></a>
              <div className={style.down}>
                <ul>
                  <li><a href="">Menu One</a></li>
                  <li><a href="">Menu Two</a></li>
                  <li><a href="">Menu Three</a></li>
                  <li><a href="">Sub Menu</a></li>
                </ul>
              </div>
              </li>
              <li><a href="">SHOP</a></li>
              <li><a href="">CATALOGUE</a></li>
              <li><a href="">NEW ARRIVALS</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <div className={style.iconbox}>
          <a href=""><i><FaSearch /></i></a>
          <a href=""><i><FaRegHeart /></i></a>
          <a href=""><i className={style.basket}><FaShoppingBasket />
          <span>2</span>
          </i></a>
        </div>
      </div>
    </>
  )
}

export default Header