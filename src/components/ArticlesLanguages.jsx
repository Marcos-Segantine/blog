import Link from 'next/link'

import articlesLanguages from '../css/module/articlesLanguages.module.css'

import Tags from './Tags'

export const ArticlesLanguages = ({ data }) => {
    
    const dataJavaScript = data.filter(element => element.tags.includes("JavaScript"))
    const dataReact = data.filter(element => element.tags.includes("React"))

    return(
        <div className={articlesLanguages.articles_languages}>
            <h4 className={articlesLanguages.articles_languages__language}>JavaScript</h4>
            <div className={articlesLanguages.articles_languages__content}>
                {
                dataJavaScript.map(data => {
                    return(
                        <Link key={data.id} href={data.articles_url} className={articlesLanguages.articles_languages__content__article}>
                            <Tags data={data.tags} />
                            <h3>{data.title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi autem sit itaque rem tempore quidem, hic exercitationem numquam minima quia quod iure voluptate laborum, molestias sed dignissimos illum necessitatibus?</p>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi autem sit itaque rem tempore quidem, hic exercitationem numquam minima quia quod iure voluptate laborum, molestias sed dignissimos illum necessitatibus?</p>
                                <span className={articlesLanguages.articles_languages__content__article__date}>{data.createdAt}</span>
                            </Link>        
                        )
                    })
                }
            </div>
        </div>
    )
}

  