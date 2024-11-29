import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Products.module.scss'
import { FaHeart } from "react-icons/fa";
function Products() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Məlumat yüklənərkən səhv baş verdi:', error);
        setLoading(false); 
      });
  }, []);

  
  if (loading) {
    return <h2>Məlumatlar yüklənir...</h2>;
  }

  return (
    <div className={style.container}>
      <h1> New Arrival</h1>
      <div className={style.grid}>
        {products.map((product) => (
          <div className={style.card} key={product.id}>
            <button>Add To Basket</button>
          <span><i><FaHeart /></i></span> 
            <img src={product.thumbnail} alt={product.title} className={style.img} />
            <div className={style.content}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;