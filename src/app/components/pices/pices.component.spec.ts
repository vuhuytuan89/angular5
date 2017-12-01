import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicesComponent } from './pices.component';

describe('PicesComponent', () => {
  let component: PicesComponent;
  let fixture: ComponentFixture<PicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
