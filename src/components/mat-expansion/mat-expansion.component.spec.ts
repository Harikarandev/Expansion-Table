import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpansionComponent } from './mat-expansion.component';

describe('MatExpansionComponent', () => {
  let component: MatExpansionComponent;
  let fixture: ComponentFixture<MatExpansionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatExpansionComponent]
    });
    fixture = TestBed.createComponent(MatExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
