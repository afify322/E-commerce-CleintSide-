import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCheckOutComponent } from './header-check-out.component';

describe('HeaderCheckOutComponent', () => {
  let component: HeaderCheckOutComponent;
  let fixture: ComponentFixture<HeaderCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCheckOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
