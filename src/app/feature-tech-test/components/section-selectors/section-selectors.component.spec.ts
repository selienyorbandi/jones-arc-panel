import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectorsComponent } from './section-selectors.component';

describe('SectionSelectorsComponent', () => {
  let component: SectionSelectorsComponent;
  let fixture: ComponentFixture<SectionSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSelectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
