import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'cl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  private frameworks: any[];
  private searchText: string;

  @Output()
  onSearch = new EventEmitter<string>();

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
  }

  changeFilter(index) {
    this.frameworks.forEach(f => {
      f.selected = false;
    });
    this.frameworks[index].selected = true;
  }

  searchComponents() {
    this.onSearch.emit(this.searchText);
  }
}
