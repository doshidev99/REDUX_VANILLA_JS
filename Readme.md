### Start run  - npm run dev
[![build status](https://img.shields.io/travis/KELiON/redux-async-initial-state/master.svg?style=flat-square)]

![alt text](https://miro.medium.com/max/3656/1*jVw1kwKpvWsKcqp9o29iHA.png "Lifecycle redux")

#### !note config 
```npm init -y ```
😎😎😗
```npm i redux```
😎😎😗

- ```npm i webpack webpack-cli @babel/core babel-loader @babel/preset-env --save-dev ```
-- config webpack add inside package.json line code :         
- ```"dev": "webpack --watch --mode=development",```

- Actions : don't handle logic and only return plain object {type, payload}
- Reducers have const get 2 parameter ( initialState, action )
- Store : only one is using createStore create Store + connect with redux - reducer 
- main.js ( index.js inside src): connect store take action dispatch .....
- !important : createStore(reducer, preloadedState, enhancer(middleware()))