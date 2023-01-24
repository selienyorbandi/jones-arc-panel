import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IconWidgetComponent } from "./icon-widget.component";

describe("IconWidgetComponent", () => {
  let component: IconWidgetComponent;
  let fixture: ComponentFixture<IconWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconWidgetComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
