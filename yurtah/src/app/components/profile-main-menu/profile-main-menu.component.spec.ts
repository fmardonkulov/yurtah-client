import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainMenuComponent } from './profile-main-menu.component';

describe('ProfileMainMenuComponent', () => {
  let component: ProfileMainMenuComponent;
  let fixture: ComponentFixture<ProfileMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
