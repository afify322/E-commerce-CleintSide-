import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteListComponent } from './user-favorite-list.component';

describe('UserFavoriteListComponent', () => {
  let component: UserFavoriteListComponent;
  let fixture: ComponentFixture<UserFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
