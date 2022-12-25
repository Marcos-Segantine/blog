import Link from 'next/link'

import articlesLanguages from '../css/module/articlesLanguages.module.css'

import Tags from './Tags'

export const ArticlesLanguages = ({ data }) => {
    
    const dataJavaScript = data.filter(element => element.tags.includes("JavaScript"))
    const resumeJavaScript = dataJavaScript.map(data => {
        if(data.resume.split('').length > 150) return data.resume.split('').slice(0, 150).join('') + "..."
        else return data.resume
    })

    const dataReact = data.filter(element => element.tags.includes("React"))
    const resumeReact = dataReact.map(data => {
        if(data.resume.split('').length > 150) return data.resume.split('').slice(0, 150).join('') + "..."
        else return data.resume
    })

    return(
        <div className={articlesLanguages.articles_languages}>
            <h4 className={articlesLanguages.articles_languages__language}>JavaScript</h4>
            <div className={articlesLanguages.articles_languages__content}>
                {
                dataJavaScript.map((data, index) => {
                    return(
                        <Link key={data.id} href={data.articles_url} className={articlesLanguages.articles_languages__content__article}>
                            <Tags data={data.tags} />
                            <h3>{data.title}</h3>
                            <p>{resumeJavaScript[index]}</p>
                            <span className={articlesLanguages.articles_languages__content__article__date}>{data.createdAt}</span>
                        </Link>
                        )
                    })
                }
            </div>
            
            <h4 className={articlesLanguages.articles_languages__language}>ReactJs</h4>
            <div className={articlesLanguages.articles_languages__content}>
                {
                    dataReact.map((data, index) => {
                        if(index > 3) return
                        return(
                            <Link key={data.id} href={data.articles_url} className={articlesLanguages.articles_languages__content__article}>
                                <Tags data={data.tags} />
                                <h3>{data.title}</h3>
                                <p>{data.resume}</p>
                                <span className={articlesLanguages.articles_languages__content__article__date}>{data.createdAt}</span>
                            </Link>        
                        )
                    })
                }
            </div>
        </div>
    )
}

  