import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListCompComponent } from './api-list-comp.component';

describe('ApiListCompComponent', () => {
  let component: ApiListCompComponent;
  let fixture: ComponentFixture<ApiListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
