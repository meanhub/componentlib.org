import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cl-component-thumbnail',
  templateUrl: './component-thumbnail.component.html',
  styleUrls: ['./component-thumbnail.component.css']
})
export class ComponentThumbnailComponent implements OnInit {

  @Input()
  component: any;

  constructor() {
  }

  ngOnInit() {
  }
}
