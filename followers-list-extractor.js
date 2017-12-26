const cheerio = require('cheerio'),
  cUtil = require('./counter')

module.exports = (indexFileAddress) => {
  //loading file with cheerio
  const $ = cheerio.load(indexFileAddress)

  //extracting userIds and pushing them into an array
  let followers = []
  cUtil.counterStart('SCRAPPING STARTED!')
  $('._2nunc ._2g7d5').each((index, element) => {
    followers.push({index, userId: element.attribs.title})
    cUtil.counter()
  })
  cUtil.counterFinish('SCRAPPING FINISHED!')

  //returning the array of userIds
  return followers
}











