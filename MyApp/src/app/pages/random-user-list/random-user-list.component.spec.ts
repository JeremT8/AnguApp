import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserListComponent } from './random-user-list.component';

describe('RandomUserListComponent', () => {
  let component: RandomUserListComponent;
  let fixture: ComponentFixture<RandomUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
