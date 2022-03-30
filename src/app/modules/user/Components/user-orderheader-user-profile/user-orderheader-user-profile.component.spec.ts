import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderheaderUserProfileComponent } from './user-orderheader-user-profile.component';

describe('UserOrderheaderUserProfileComponent', () => {
  let component: UserOrderheaderUserProfileComponent;
  let fixture: ComponentFixture<UserOrderheaderUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderheaderUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderheaderUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
