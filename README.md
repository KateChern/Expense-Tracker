
## Expense-Tracker

In this project I gathered and developed requirements for a React application with responsive design using Redux to manage its state. 

The main objectif was to develope custom functionality in React to manage balance, income, expenses and transactions 
to help with budgeting


### Project Requirements 
#### To develope custom functionality in React to manage: <br>
<li> balance </li> <li> income </li> <li> expenses </li> <li> transactions </li>  <br>
to help with budgeting <br>

#### To create responsive design for mobile version and deskstop



You will need to use a Terminal. On OS X, you can find the default terminal in /Applications/Utilities/Terminal.app.

Please install Homebrew if it's not already done with the following command.

$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
If everything when fine, you should run

brew install node
Node installation on Linux
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
Node installation on Windows
Just go on official Node.js website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.

Install
$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
$ npm install
Configure app
Copy config.sample.json to config.json then edit it with the url where you have setup:

backend api
oauth like endpoint for auth
development
Start & watch
$ npm start
Simple build for production
$ npm run build
Update sources
Some packages usages might change so you should run npm prune & npm install often. A common way to update is by doing

$ git pull
$ npm prune
$ npm install
To run those 3 commands you can just do

$ npm run pull
Note: Unix user can just link the git-hooks/post-merge:

Enable git hooks (unix only :/)
$ npm run create-hook-symlinks
post-merge (≃ npm install)
This hook will npm prune && npm install each time you git pull something if the package.json has been modified.

pre-commit (≃ npm test)
This hook will just ensure you will commit something not broken bye pruning npm packages not in the package.json & eventually reinstall missings/not correctly removed packages. Then it will try a production build.

Languages & tools
HTML
Jade for some templating.
JavaScript
JSHint is used to prevent JavaScript error.
JSCS is used to check coding conventions.
Browserify to handle allow us to write our client-side scripts with es6 syntax thanks to es6ify.
React is used for UI.
CSS
cssnext is used to write futureproof CSS for CSS vendor prefix under the hood).
Autoprefixer is included and use caniuse.com database to avoid outdated prefixes. You can forget CSS prefixes NOW.

Static server with Livereload
The app embed for development a static connect server with livereload plugged. So each time you start the app, you get automatic refresh in the browser whenever you update a file.

