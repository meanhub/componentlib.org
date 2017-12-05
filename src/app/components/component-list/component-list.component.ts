import {Component, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'cl-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  components: any[];

  constructor(private componentService: ComponentService) {
    this.components = [];

    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
  }

  ngOnInit() {
    this.components = this.componentService.getReactComponents();
  }

  onSearchTextChanged(searchCriteria) {
    searchCriteria.searchText = searchCriteria.searchText.toLowerCase();
    if (searchCriteria.framework === 'AngularJS 1.x') {
      this.components = this.componentService.getAngularJSComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'Angular 2+') {
      this.components = this.componentService.getAngularComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'React') {
      this.components = this.componentService.getReactComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'React Native') {
      this.components = this.componentService.getReactNativeComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'Vue') {
      this.components = this.componentService.getVueComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'Ember') {
      this.components = this.componentService.getEmberComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'Web Components') {
      this.components = this.componentService.getWebComponents(searchCriteria.searchText);
    } else {
      this.components = [];
    }
  }
}
