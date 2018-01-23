import {Component, Input, OnInit, ElementRef, HostBinding, HostListener} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'cl-component-thumbnail',
  templateUrl: './component-thumbnail.component.html',
  animations: [
    trigger('expand', [
        state('small', style({
            height: '520px',
            width: '500px',
        })),
        state('large', style({
            height: '95vh',
            width: '95vw',
        })),
        transition('small => large', animate('500ms ease-in')),
        transition('large => small', animate('500ms ease-in')),
    ]),
  ],
  styleUrls: ['./component-thumbnail.component.css']
})
export class ComponentThumbnailComponent implements OnInit {

  public showDemo: boolean;
  public isCodePen: boolean;
  public isJsFiddle: boolean;
  public isPlunker: boolean;
  public isExpo: boolean;
  public isImg: boolean;
  public isCustom: boolean;
  public isExpanded: boolean;
  public elref: ElementRef;
  public e: any;
  public imgSrc = '../../../assets/images/maximize.png';


  @Input()
  component: any;

  @HostBinding('@expand') state: any;

  constructor(elref: ElementRef) {
    this.showDemo = false;
    this.isCodePen = false;
    this.isJsFiddle = false;
    this.isPlunker = false;
    this.isExpo = false;
    this.isImg = false;
    this.isCustom = false;
    this.elref = elref;
    this.isExpanded = false;
    this.state = 'small';

    this.bowerMouseEnter = this.bowerMouseEnter.bind(this);
    this.bowerMouseLeave = this.bowerMouseLeave.bind(this);
    this.npmMouseEnter = this.npmMouseEnter.bind(this);
    this.npmMouseLeave = this.npmMouseLeave.bind(this);
    this.expandMouseEnter = this.expandMouseEnter.bind(this);
    this.expandMouseLeave = this.expandMouseLeave.bind(this);
  }

  ngOnInit() {
    this.isCodePen = this.component.demo.repl === 'codepen';
    this.isJsFiddle = this.component.demo.repl === 'jsfiddle';
    this.isPlunker = this.component.demo.repl === 'plunker';
    this.isExpo = this.component.demo.repl === 'expo';
    this.isImg = this.component.demo.repl === 'img';
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

  @HostListener('@expand.done', ['$event'])
  animationDone(event: AnimationEvent) {
    if (event.fromState !== 'void') {
      this.elref.nativeElement.scrollIntoView();
    }
    console.log(event);
  }

  expandMouseEnter() {
    this.imgSrc = this.isExpanded ? '../../../assets/images/minimize-dark.png' : '../../../assets/images/maximize-dark.png' ;
  }

  expandMouseLeave() {
    this.imgSrc = this.isExpanded ? '../../../assets/images/minimize.png' : '../../../assets/images/maximize.png' ;
  }

  onExpand(value: boolean) {
    this.isExpanded = !this.isExpanded;
    this.state = (this.state === 'small' ? 'large' : 'small');
    this.imgSrc = this.isExpanded ? '../../../assets/images/minimize.png' : '../../../assets/images/maximize.png' ;
    }
}
