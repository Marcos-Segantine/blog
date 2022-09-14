import article from "../css/module/tags.module.css";

export default function Tags({ data }) {
  /* Separa as tags para array para rederizalos como compoentes */
  const tags = data.split(", ");
  return (
    <div className={article.article__info__tag}>
        {tags.map((tag) => {
          return <span key={tags.indexOf(tag)}>{tag}</span>
        })}
    </div>
  );
}
