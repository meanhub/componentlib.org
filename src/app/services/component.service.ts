import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {ANGULAR_COMPONENTS} from '../data/angular2-components';

@Injectable()
export class ComponentService {

  constructor(private http: Http) {
  }

  getFrameworkFilters(): string[] {
    return ['AngularJS 1.x', 'Angular 2+', 'React', 'Vue', 'Ember'];
  }

  getAngularComponents(): any[] {
    const components = ANGULAR_COMPONENTS;

    components.forEach(c => {
      if (c.install.packager === 'npm') {
        c.npmUrl = 'https://www.npmjs.com/package/' + c.install.url;
      }

      if (c.source.domain === 'github') {
        c.githubUrl = 'https://github.com/' + c.source.url;
      }
    });

    return components;
  }
}
