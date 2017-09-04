import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cl-component-thumbnail',
  templateUrl: './component-thumbnail.component.html',
  styleUrls: ['./component-thumbnail.component.css']
})
export class ComponentThumbnailComponent implements OnInit {

  public isCodePen: boolean;

  @Input()
  component: any;

  constructor() {
    this.isCodePen = false;
  }

  ngOnInit() {
    this.isCodePen = this.component.demo.repl === 'codepen';
  }
}
