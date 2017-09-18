import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelunasanComponent } from './pelunasan.component';

describe('PelunasanComponent', () => {
  let component: PelunasanComponent;
  let fixture: ComponentFixture<PelunasanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelunasanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelunasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
