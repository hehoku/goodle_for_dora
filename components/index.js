module.exports = {
  type: 'list',
  async fetch({ args }) {
    // const url = `https://www.google.com/doodles/json/${year}/${month}?hl=zh_CN`

    const url = 'https://www.google.com/doodles/json/2019/12?hl=zh_CN'
    const response = await $http.get(url)
    const doodelsJson = response.data

    console.log(doodelsJson)

    return doodelsJson.map((item) => {
      return {
        title: item.title,
        thumb: `https://${item.url}`,
        style: 'gallery',
        summary: item.share_text,
        route: $route('@image', {
          url: `https://${item.url}`
        })
      }
    })
  }
}
