import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewreportComponent } from './addnewreport.component';

describe('AddnewreportComponent', () => {
  let component: AddnewreportComponent;
  let fixture: ComponentFixture<AddnewreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
