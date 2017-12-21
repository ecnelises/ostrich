import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';
import { filter } from 'rxjs/operators/filter';
//import { Plunker } from 'create-plunker';
//import { sources as demoUtilsSources } from './demo-modules/demo-utils/sources';

interface Source {
  filename: string;
  contents: {
    raw: string;
    highlighted: string;
  };
  language: string;
}

interface Demo {
  label: string;
  path: string;
  sources?: Source[];
}





@Component({
  selector: 'mwl-demo-app',
  styleUrls: ['./demo-app.css'],
  templateUrl: './demo-app.html'
})
export class DemoAppComponent implements OnInit {
  demos: Demo[] = [];
  activeDemo: Demo;
  isMenuVisible = false;
  firstDemoLoaded = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const defaultRoute = this.router.config.find(route => route.path === '**');

    this.demos = this.router.config
      .filter(route => route.path !== '**')
      .map(route => ({
        path: route.path,
        label: route.data['label']
      }));

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(take(1))
      .subscribe(() => (this.firstDemoLoaded = true));

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .pipe(
        map((event: NavigationStart) => {
          if (event.url === '/') {
            return { url: `/${defaultRoute.redirectTo}` };
          }
          return event;
        })
      )
      
  }

 }