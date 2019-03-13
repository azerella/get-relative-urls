# get-relative-urls
> Get all the relative URLs in a string

[![Build Status](https://travis-ci.org/adamzerella/au-tax-calc.svg?branch=master)](https://travis-ci.org/adamzerella/au-tax-calc)

I'm aspiring to make open-source my full-time work. If you or your company likes the work that I do, please consider supporting me.

[![Coffee][badge_coffee_donate]](https://www.buymeacoffee.com/adamzerella)
[![PayPal][badge_paypal_donate]](https://www.paypal.me/adamzerella)

## Install

```bash
npm i get-relative-urls
```

## Usage

### Module

```javascript
const getRelativeURLs = require( 'get-relative-urls' );

let fileContents = require( 'fs' ).readFileSync( 'index.html', 'utf-8' );

getRelativeURLs( fileContents );

// ['/assets/js/main.js', '/index.html", '/assets/favicon.ico' ...]
```

## Test

```bash
npm test
```

## Contribute

Don't be scared raise an issue or a pull request! Any contributions, no matter how big or small will land your picture here.

<div style="display:inline;">
  <a href="https://github.com/adamzerella"><img width="64" height="64" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam Zerella"/></a>
</div>

[badge_coffee_donate]: https://adamzerella.com/badges/coffee.svg
[badge_paypal_donate]: https://adamzerella.com/badges/paypal.svg