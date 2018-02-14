import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFunctionComponent } from './dialog-function.component';

describe('DialogFunctionComponent', () => {
  let component: DialogFunctionComponent;
  let fixture: ComponentFixture<DialogFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
