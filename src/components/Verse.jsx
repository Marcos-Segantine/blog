import verse from '../css/module/verse.module.css'

export default function Verse(props) {
  return (
    <div className={verse.verse}>
      <p>
        {props.verse}
      </p>
      <span>{props.address}</span>
    </div>
  );
}
