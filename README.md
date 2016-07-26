#Gulp starter

## 1. Requirement and installation

### NodeJS

First, you need a recent installation of [nodejs](http://nodejs.org/).

Then, you can install Node dependencies needed for this starter

```shell
cd <this repo>
npm install
```

## Gulp

This project also works with [gulp](http://gulpjs.com/), follow this instruction to install it
```shell
sudo npm install --global gulp-cli
```


## 2. Project initialisation

**We highly recommand to use this file tree**

But you also can set your own paths configurations in `config/general.config.js` 

```
project
│   README.md
│   .gitignore
│   ...
│
└───gulp
│   │   
│   └─ <this repository>
│       
│
├───src
│   │
│   ├─── scripts
│   │    ...
│   │
│   └─── styles
│        ...    
│
└─── build
    │   index.html
    │   ...
    │
    ├─── js
    │    ...
    │
    └─── css
         ...      
```

## 3. Run tasks

Simply run `gulp` on your terminal
