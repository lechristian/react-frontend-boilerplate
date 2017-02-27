React Frontend Boilerplate
==========================

A simple frontend only boilerplate for quick/easy react experimenting.
Built with [Innovative Design](http://innovativedesign.club) web tier in mind.

This boilerplate will try to keep up to date with the newest tools (e.g. `react-hot-loader@3.0.0.beta6`)

### Set Up

With [yarn](https://yarnpkg.com/en/)
```
$ yarn install
```

With npm
```
$ npm install
```

### Tests

All tests should be put into `__tests__` with the naming convention `[Filename].test.js`

```
$ npm run test
```

### TODO

- [-] Create WebPack config for production bundling
  - [x] CSS
    - [x] [Extract to file](https://github.com/webpack-contrib/extract-text-webpack-plugin)
    - [x] [CSS Nano](http://cssnano.co/)
  - [x] JS
    - [x] Minification
    - [ ] External Source Map
    - [ ] Polyfill for older browsers
- [x] CSS
  - [x] ~~[Normalize.css](https://necolas.github.io/normalize.css/)~~
- [x] Redux
  - [x] ~~Include basic usage of [Redux](http://redux.js.org/)~~
  - [x] Set up [redux-devtools](https://github.com/gaearon/redux-devtools)
- [x] Tests
  - [x] Set up [Jest](https://facebook.github.io/jest/)
  - [x] Write basic test for `Home` Component

