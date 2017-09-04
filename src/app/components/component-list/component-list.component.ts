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
    this.components = this.componentService.getAngularJSComponents();
  }

  onSearchTextChanged(searchCriteria) {
    if (searchCriteria.framework === 'AngularJS 1.x') {
      this.components = this.componentService.getAngularJSComponents(searchCriteria.searchText);
    } else if (searchCriteria.framework === 'React') {
      this.components = this.componentService.getReactComponents(searchCriteria.searchText);
    } else {
      this.components = [];
    }
  }
}
