import categories from "../css/module/categories.module.css";

export default function Categories({ setTag }) {
  return (
    <div className={categories.categories}>
      <h4>Categories</h4>
      <ul className={categories.categories__list}>
        <li>
          <p onClick={() => {setTag('html, css')}}>HTML/CSS</p>
        </li>
        <li>
          <p onClick={() => {setTag('javascript')}}>JavaScript</p>
        </li>
        <li>
          <p onClick={() => {setTag('node')}}>Node</p>
        </li>
        <li>
          <p onClick={() => {setTag('react')}}>React.js</p>
        </li>
      </ul>
    </div>
  );
}
