import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContentWrapperComponent } from './profile-content-wrapper.component';

describe('ProfileContentWrapperComponent', () => {
  let component: ProfileContentWrapperComponent;
  let fixture: ComponentFixture<ProfileContentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
