import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngsuranComponent } from './angsuran.component';

describe('AngsuranComponent', () => {
  let component: AngsuranComponent;
  let fixture: ComponentFixture<AngsuranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngsuranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngsuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
