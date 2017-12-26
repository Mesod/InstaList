const fs = require('fs'),
  jsonToCsv = require('json-to-csv')
const followersListExtractor = require('./followers-list-extractor')

//checking to see if index file exists!
const indexFileExists = fs.existsSync(`${__dirname}/index.html`)

//checking to see if followers-list.csv already exists!
const followersListFile = fs.existsSync(`${__dirname}/followers-list.csv`)


if (indexFileExists) {
  //removing the followers list if exists
  if(followersListFile) {
    fs.unlinkSync(`${__dirname}/followers-list.csv`)
  }

  //starting the process
  const indexFileAddress = fs.readFileSync(`${__dirname}/index.html`, 'utf8')
  const followersList = followersListExtractor(indexFileAddress)

  //exporting the list into a csv file
  jsonToCsv(followersList, 'followers-list.csv')
    .then(() => {
      console.log('Operation Finished Successfully! Please Check the spreadsheet!')
    })
    .catch(e => {
      console.log('Error Occurred! TRY AGAIN!')
    })
} else {
  console.log('index.html file not found! PLEASE put the file in project\'s root folder!');
}