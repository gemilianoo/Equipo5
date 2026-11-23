import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rocamontes } from './rocamontes';

describe('Rocamontes', () => {
  let component: Rocamontes;
  let fixture: ComponentFixture<Rocamontes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rocamontes],
    }).compileComponents();

    fixture = TestBed.createComponent(Rocamontes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
