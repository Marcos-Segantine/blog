import languages from "../css/module/languages.module.css";

import Link from "next/link";

export const Languages = () => {
  return (
    <div className={languages.languages}>
      <div className={languages.languages__title_link}>
        <h3 className={languages.languages__title_link__title}>Linguagens</h3>
        <Link href="/">Ver todas</Link>
      </div>
      <div className={languages.languages__content_languages}>
        <ul>
          <li className={languages.languages__content_languages__language}>SQL</li>
          <li className={languages.languages__content_languages__language}>JavaScript</li>
          <li className={languages.languages__content_languages__language}>React</li>
          <li className={languages.languages__content_languages__language}>C#</li>
        </ul>
      </div>
    </div>
  );
};
