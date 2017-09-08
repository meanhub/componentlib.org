import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cl-component-thumbnail',
  templateUrl: './component-thumbnail.component.html',
  styleUrls: ['./component-thumbnail.component.css']
})
export class ComponentThumbnailComponent implements OnInit {

  public isCodePen: boolean;
  public isExpo: boolean;
  public isCustom: boolean;

  @Input()
  component: any;

  constructor() {
    this.isCodePen = false;
    this.isExpo = false;
    this.isCustom = false;

    this.bowerMouseEnter = this.bowerMouseEnter.bind(this);
    this.bowerMouseLeave = this.bowerMouseLeave.bind(this);
    this.npmMouseEnter = this.npmMouseEnter.bind(this);
    this.npmMouseLeave = this.npmMouseLeave.bind(this);
  }

  ngOnInit() {
    this.isCodePen = this.component.demo.repl === 'codepen';
    this.isExpo = this.component.demo.repl === 'expo';
    this.isCustom = this.component.demo.repl === 'custom';
  }

  npmMouseEnter() {
    const npm = this.component.install.find(i => i.packager === 'npm') || {};
    this.component.info = 'npm install --save ' + npm.url;
  }

  npmMouseLeave() {
    this.component.info = '';
  }

  bowerMouseEnter() {
    this.component.info = 'bower install --save ' + this.component.bowerPackage;
  }

  bowerMouseLeave() {
    this.component.info = '';
  }

  detailsMouseEnter() {
    this.component.info = this.component.details;
  }

  detailsMouseLeave() {
    this.component.info = '';
  }
}
