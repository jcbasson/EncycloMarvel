# EncycloMarvel
Encyclopedia of Marvel Characters responsive app, allowing the user to view all Marvel Character information. Custom implementation of infinite scrolling with redux, react, and rxjs.

Front-end stack:
```
React, Redux, Redux-Observable, Rxjs, Marvel API, Immutable.js, Webpack2, Babel, Npm
```
Couple of Notes:
```
The applications starts with retrieving the first 100 Marvel characters and then displays those.
After which it proceeds to mines the rest of available Marvel characters from the Marvel API in the background.
This is done to have them immediately available when scrolling the the list of marvel characters.
```
### TODOS

    1.Investigate why Marvel API returns me a response of OK with no data property.
    2.Implemente global, redux store and component level exception handling and logging

## Getting Started

```
Node.js and NPM - Install from https://www.npmjs.com/get-npm
```

### Installing

    1.Run Gitbash in the folder you would like to clone the project.
    2.In git bash run git clone https://github.com/jcbasson/EncycloMarvel.git
    3.Using Gitbash in the root of project run "npm install" 
    4.Using Gitbash in the root of project again run "npm start" 
    5.For now use only Google Chrome, FireFox or IE Edge and run http://localhost:8080/

## Authors

* **Jan-Christiaan Basson**
