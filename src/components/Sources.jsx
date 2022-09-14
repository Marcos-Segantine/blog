import sources from "../css/module/sources.module.css";

export default function Sources({ sorces }) {
  const sorcesArray = sorces.split(",");

  return (
    <div className={sources.sources}>
      <h4>Fontes</h4>
      <ul>
          {sorcesArray.map((data, index) => {
            return (
              <li key={index}>{data}</li>
            )
          })}
      </ul>
    </div>
  );
}
