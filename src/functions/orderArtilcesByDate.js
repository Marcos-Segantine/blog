export const orderArtilcesByDate = (data) => {
  let articlesOrderByCreatedAt__temp = []

  for(let item in data) {
    let arr = data[item].createdAt.split('')
    arr.splice(4, 1)
    arr.splice(6, 1)

    arr = +arr.join('')

    articlesOrderByCreatedAt__temp.push({
      createdAt: arr,      
    })
  }

  articlesOrderByCreatedAt__temp = articlesOrderByCreatedAt__temp.sort((a, b) => b.createdAt - a.createdAt)
  
  const articlesOrderByCreatedAt = []

  for(let item in articlesOrderByCreatedAt__temp) {
    const arr = articlesOrderByCreatedAt__temp[item].createdAt.toString().split('')
    arr.splice(4,0, '/')
    arr.splice(7, 0, '/')
    
    articlesOrderByCreatedAt.push({
      createdAt: arr.join(''),
      title: data[item].title,
      articles_url: data[item].articles_url,
      resume: data[item].resume
    })
  }

  return articlesOrderByCreatedAt
}
