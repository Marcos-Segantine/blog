import categories from "../css/module/categories.module.css";

import { useEffect, useState } from "react";

export default function Categories({ setTag }) {

  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      const scroll = window.scrollY;

      if(scroll > 700) setShowCategories(true)
      else setShowCategories(false)

      console.log(scroll);

    }

    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      {showCategories ? 
      (<div className={categories.categories}>
        <h4>Filtrar por categoria</h4>
        <ul className={categories.categories__list}>
          <li>
            <p onClick={() => {setTag('html')}}>HTML</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('css')}}>CSS</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('javascript')}}>JavaScript</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('typescript')}}>TypeScript</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('node')}}>Node</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('react')}}>React.js</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('python')}}>Python</p>
            <span className={categories.categories__list__line}></span>
          </li>
          <li>
            <p onClick={() => {setTag('sql')}}>SQL</p>
            <span className={categories.categories__list__line}></span>
          </li>
        </ul>
      </div>) : 
      ""  
    
    }
    </>
  );
}
