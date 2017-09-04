import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'cl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public frameworks: any[];
  public searchText: string;

  private selectedFramework: any;

  @Output()
  onSearch = new EventEmitter<any>();

  constructor(private componentService: ComponentService) {
    this.searchText = '';

    this.changeFilter = this.changeFilter.bind(this);
    this.searchComponents = this.searchComponents.bind(this);
  }

  ngOnInit() {
    this.frameworks = this.componentService.getFrameworkFilters()
      .map(f => {
        return {
          name: f,
          selected: false
        };
      });

    this.frameworks[1].selected = true;
    this.selectedFramework = this.frameworks[1];
  }

  changeFilter(index) {
    this.frameworks.forEach(f => {
      f.selected = false;
    });
    this.frameworks[index].selected = true;
    this.selectedFramework = this.frameworks[index];

    this.onSearch.emit({
      searchText: this.searchText,
      framework: this.selectedFramework.name
    });
  }

  searchComponents() {
    this.onSearch.emit({
      searchText: this.searchText,
      framework: this.selectedFramework.name
    });
  }
}
