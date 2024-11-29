import React from 'react'
import { FaHeart } from "react-icons/fa";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={style.container}>
      <p>Copyright ©2024 All rights reserved | This template is made with <FaHeart /> by Colorlib</p>
    </div>
    </>
  )
}

export default Footer