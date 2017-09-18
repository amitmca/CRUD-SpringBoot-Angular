import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadaiInputComponent } from './gadai-input.component';

describe('GadaiInputComponent', () => {
  let component: GadaiInputComponent;
  let fixture: ComponentFixture<GadaiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadaiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadaiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
