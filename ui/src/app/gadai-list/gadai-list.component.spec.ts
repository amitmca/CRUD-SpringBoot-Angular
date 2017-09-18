import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadaiListComponent } from './gadai-list.component';

describe('GadaiListComponent', () => {
  let component: GadaiListComponent;
  let fixture: ComponentFixture<GadaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
