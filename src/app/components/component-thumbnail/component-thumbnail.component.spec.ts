import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentThumbnailComponent } from './component-thumbnail.component';

describe('ComponentThumbnailComponent', () => {
  let component: ComponentThumbnailComponent;
  let fixture: ComponentFixture<ComponentThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
