import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidSectionComponent } from './kid-section.component';

describe('KidSectionComponent', () => {
  let component: KidSectionComponent;
  let fixture: ComponentFixture<KidSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
