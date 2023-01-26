import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKpiBtnComponent } from './add-kpi-btn.component';

describe('AddKpiBtnComponent', () => {
  let component: AddKpiBtnComponent;
  let fixture: ComponentFixture<AddKpiBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKpiBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKpiBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
