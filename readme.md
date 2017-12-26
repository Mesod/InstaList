# (Insta-List) Follower List Extractor

This simple script is developed for exporting followers list of instagram profiles.

Get started:

 * Open your terminal and excute these commands:
 	* git clone https://github.com/Mesod/InstaList.git 	
 	* cd InstaList
 	* npm install
 * Open your browser:
 	* open https://www.instagram.com/
 	* browse to a profile
 	* click on the followers
 	* scroll down until all the users are loaded 
 	* save the page as index.html in the InstaList folder
 * Open your terminal, go to the project folder and excute this command:
 	* node app.js
 * Open the followers-list.csv in the project folder and enjoy!


Requirements:

 * Nodejs version 8+ (https://nodejs.org/en/)
 * git (https://git-scm.com/) 




### Open Source Libraries used in the project:

 * [cheeriojs](https://github.com/cheeriojs/cheerio) for scraping data
 * [json-to-csv](https://github.com/ashah023/json-to-csv) for exporting data as csv
