import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CommentsWidgetComponent } from "./comments-widget.component";

describe("CommentsWidgetComponent", () => {
  let component: CommentsWidgetComponent;
  let fixture: ComponentFixture<CommentsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsWidgetComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
