# React Todo Application

A simple todo application written with ReactJS, Redux, Foundation, and utilizing a Firebase backend.

[Try out the demo yourself!](https://ancient-forest-81835.herokuapp.com/#/?_k=bjkxtz)


#Developer Setup
If you with to poke around or give a bug fix, clone the repository to your computer and follow these steps:

##Install modules
Install all of the development and production dependencies:
```
$ npm install
```

##Webpack with continuous reloading
As changes are made, Webpack will update the "build.js" file that holds the application's code.
```
$ webpack -w

```

##Run dev server
In a different terminal, this will start an Express server and serve requests on port 3000.
```
$ node server.js
```

##Test
To run tests:
```
$ npm test

```

##Test Deployment
This will ensure the steps Heroku will use to deploy and serve the application work correctly:
```
$ npm start

```




# Changelog

v 1.0.1
-------
* Fixed for Heroku deployment

v 1.0.0
-------
* Complete application