# UI

[![NPM version](https://img.shields.io/npm/v/UI.svg?style=flat)](https://npmjs.org/package/UI)
[![NPM downloads](http://img.shields.io/npm/dm/UI.svg?style=flat)](https://npmjs.org/package/UI)

A vue library developed with dumi

## Usage

First, introduce css file:

```ts
import 'UI/dist/style.css';
```

Then, introduce components:

```html
<script setup lang="ts">
  import { Foo, Bar } from 'UI';
</script>
```

## Options

TODO

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# Locally preview the production build.
$ npm run docs:preview

# check your project for potential problems
$ npm run doctor

# Test
$ npm test

# Coverage
$ npm test:cov

# Lint
$ npm lint
```

## LICENSE

MIT
