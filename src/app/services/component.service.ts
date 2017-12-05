import { Injectable } from '@angular/core';
import { ANGULARJS_COMPONENTS } from '../data/angularjs-components';
import { ANGULAR_COMPONENTS } from '../data/angular2-components';
import { REACT_COMPONENTS } from '../data/react-components';
import { VUE_COMPONENTS } from '../data/vue-components';
import { EMBER_COMPONENTS } from '../data/ember-components';
import { REACT_NATIVE_COMPONENTS } from '../data/react-native-components';
import { WEB_COMPONENTS } from '../data/web-components';

@Injectable()
export class ComponentService {

  constructor() {
  }

  getFrameworkFilters(): string[] {
    return ['AngularJS 1.x', 'Angular 2+', 'React', 'React Native', 'Vue', 'Ember', 'Web Components'];
  }

  getAngularJSComponents(searchText?: string): any[] {
    return this.getFilterComponents(ANGULARJS_COMPONENTS, searchText);
  }

  getAngularComponents(searchText?: string): any[] {
    return this.getFilterComponents(ANGULAR_COMPONENTS, searchText);
  }

  getReactComponents(searchText?: string): any[] {
    return this.getFilterComponents(REACT_COMPONENTS, searchText);
  }

  getReactNativeComponents(searchText?: string): any[] {
    return this.getFilterComponents(REACT_NATIVE_COMPONENTS, searchText);
  }

  getVueComponents(searchText?: string): any[] {
    return this.getFilterComponents(VUE_COMPONENTS, searchText);
  }

  getEmberComponents(searchText?: string): any[] {
    return this.getFilterComponents(EMBER_COMPONENTS, searchText);
  }

  getWebComponents(searchText?: string): any[] {
    return this.getFilterComponents(WEB_COMPONENTS, searchText);
  }

  private getFilterComponents(components: any[], searchText: string) {
    if (searchText) {
      searchText = searchText.replace('-', '');
      components = components.filter(c => {
        for (const word of c.keywords) {
          if (word.includes(searchText)) {
            return true;
          }
        }
        return false;
      });
    }

    components.forEach(c => {
      if (!c.install.length) {            // single install object
        c.install = [c.install];
      }

      c.install.map(i => {
        if (i.packager === 'npm') {
          c.npmUrl = 'https://www.npmjs.com/package/' + i.url;
        } else if (i.packager === 'bower') {
          c.bowerPackage = i.url;
        } else if (i.packager === 'download') {
          c.downloadUrl = i.url;
        }
      });

      if (c.source.domain === 'github') {
        c.githubUrl = 'https://github.com/' + c.source.url;
      }
    });

    return components;
  }
}
