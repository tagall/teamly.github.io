import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealCreateComponent } from './deal-create.component';

describe('DealCreateComponent', () => {
  let component: DealCreateComponent;
  let fixture: ComponentFixture<DealCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
