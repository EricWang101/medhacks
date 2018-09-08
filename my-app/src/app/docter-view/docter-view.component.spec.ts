import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterViewComponent } from './docter-view.component';

describe('DocterViewComponent', () => {
  let component: DocterViewComponent;
  let fixture: ComponentFixture<DocterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
