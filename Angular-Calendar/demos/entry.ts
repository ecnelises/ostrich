import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoAppModule } from './demo-app.module';

declare const ENV: string;
if (ENV === 'production') {
  const { install } = require('offline-plugin/runtime'); // tslint:disable-line
  install();
  enableProdMode();
}

const dynamicPolyfills = [];

if (typeof Intl === 'undefined') {
  dynamicPolyfills.push(
    Promise.all([
      import(/* webpackChunkName: "intl" */ 'intl'),
      import(/* webpackChunkName: "intl" */ 'intl/locale-data/jsonp/en')
    ])
  );
}

if (
  typeof Object.entries === 'undefined' ||
  typeof Object.values === 'undefined'
) {
  dynamicPolyfills.push(Promise.all([import('core-js/es7/object')]));
}

if (typeof Element.prototype['animate'] === 'undefined') {
  dynamicPolyfills.push(import('web-animations-js'));
}

Promise.all(dynamicPolyfills).then(() =>
  platformBrowserDynamic().bootstrapModule(DemoAppModule)
);
