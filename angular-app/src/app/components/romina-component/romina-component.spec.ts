import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RominaComponent } from './romina-component';

describe('RominaComponent', () => {
  let component: RominaComponent;
  let fixture: ComponentFixture<RominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RominaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RominaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
