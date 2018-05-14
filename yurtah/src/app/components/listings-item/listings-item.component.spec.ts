import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsItemComponent } from './listings-item.component';

describe('ListingsItemComponent', () => {
  let component: ListingsItemComponent;
  let fixture: ComponentFixture<ListingsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
