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
    this.components = this.componentService.getAngularComponents();
  }

  onSearchTextChanged(searchText: string) {
    this.components = this.componentService.getAngularComponents(searchText);
  }

}
