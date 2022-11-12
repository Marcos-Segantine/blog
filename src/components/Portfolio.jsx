import portfolio from "../css/module/portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={portfolio.portfolio}>
      <div className={portfolio.portfolio__text_about}>
        <h3 className={portfolio.portfolio__text_about__title}>
          Meu Portfolio
        </h3>
        <p className={portfolio.portfolio__text_about__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          aperiam provident, quasi a id recusandae!
        </p>
      </div>
      <div className={portfolio.portfolio__projects}>
        <ul>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
        </ul>
      </div>
    </div>
  );
};
