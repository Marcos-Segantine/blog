export const orderArtilcesByDate = (data) => {
  let articlesOrderByCreatedAt__temp = []

  for(let item in data) {
    let arr = data[item].createdAt.split('')
    arr.splice(4, 1)
    arr.splice(6, 1)

    arr = +arr.join('')

    articlesOrderByCreatedAt__temp.push({
      id: data[item].id,
      createdAt: arr,
      title: data[item].title,
      articles_url: data[item].articles_url,
      resume: data[item].resume      
    })
  }

  articlesOrderByCreatedAt__temp = articlesOrderByCreatedAt__temp.sort((a, b) => a.createdAt - b.createdAt).reverse()

  const articlesOrderByCreatedAt = []

  for(let item in articlesOrderByCreatedAt__temp) {
    const date = articlesOrderByCreatedAt__temp[item].createdAt.toString().split('')
    date.splice(4, 0, "/")
    date.splice(7, 0, "/")    

    articlesOrderByCreatedAt.push({
      id: articlesOrderByCreatedAt__temp[item].id,
      title: articlesOrderByCreatedAt__temp[item].title,
      createdAt: date.join(''),
      resume: articlesOrderByCreatedAt__temp[item].resume,
      articles_url: articlesOrderByCreatedAt__temp[item].articles_url
    })
  }

  return articlesOrderByCreatedAt
}
