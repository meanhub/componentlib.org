import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cl-component-thumbnail',
  templateUrl: './component-thumbnail.component.html',
  styleUrls: ['./component-thumbnail.component.css']
})
export class ComponentThumbnailComponent implements OnInit {

  public isCodePen: boolean;
  public isJsFiddle: boolean;
  public isPlunker: boolean;
  public isExpo: boolean;
  public isCustom: boolean;


  @Input()
  component: any;

  constructor() {
    this.isCodePen = false;
    this.isJsFiddle = false;
    this.isPlunker = false;
    this.isExpo = false;
    this.isCustom = false;

    this.bowerMouseEnter = this.bowerMouseEnter.bind(this);
    this.bowerMouseLeave = this.bowerMouseLeave.bind(this);
    this.npmMouseEnter = this.npmMouseEnter.bind(this);
    this.npmMouseLeave = this.npmMouseLeave.bind(this);
  }

  ngOnInit() {
    this.isCodePen = this.component.demo.repl === 'codepen';
    this.isJsFiddle = this.component.demo.repl === 'jsfiddle';
    this.isPlunker = this.component.demo.repl === 'plunker';
    this.isExpo = this.component.demo.repl === 'expo';
    this.isCustom = this.component.demo.repl === 'custom';

    if (this.isCodePen) {
      this.component.codepenUrl = 'https://codepen.io/' + this.component.demo.user + '/pen/' + this.component.demo.id;
      this.component.codepenEmbedUrl = '//codepen.io/' + this.component.demo.user + '/embed/' + this.component.demo.id + '/?height=265&theme-id=light&default-tab=result&embed-version=2';
    } else if (this.isJsFiddle) {
      this.component.jsfiddleUrl = 'https://jsfiddle.net/' + this.component.demo.user + '/' + this.component.demo.id;
      this.component.jsfiddleEmbedUrl = '//jsfiddle.net/' + this.component.demo.user + '/' + this.component.demo.id + '/embedded/';
    } else if (this.isPlunker) {
      this.component.plnkrUrl = 'http://plnkr.co/edit/' + this.component.demo.id + '?p=preview';
      this.component.plnkrEmbedUrl = '//run.plnkr.co/plunks/' + this.component.demo.id + '/';
    }
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
