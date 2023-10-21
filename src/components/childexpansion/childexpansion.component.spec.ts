import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExpansionComponent } from './childexpansion.component';

describe('ExpansionComponent', () => {
  let component: ChildExpansionComponent;
  let fixture: ComponentFixture<ChildExpansionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildExpansionComponent]
    });
    fixture = TestBed.createComponent(ChildExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
