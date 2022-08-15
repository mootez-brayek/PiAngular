import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleAccueilComponent } from './middle-accueil.component';

describe('MiddleAccueilComponent', () => {
  let component: MiddleAccueilComponent;
  let fixture: ComponentFixture<MiddleAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
