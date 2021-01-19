import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestConsumptionComponent } from './rest-consumption.component';

describe('RestConsumptionComponent', () => {
  let component: RestConsumptionComponent;
  let fixture: ComponentFixture<RestConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
