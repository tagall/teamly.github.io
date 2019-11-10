import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantJoinComponent } from './want-join.component';

describe('WantJoinComponent', () => {
  let component: WantJoinComponent;
  let fixture: ComponentFixture<WantJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
