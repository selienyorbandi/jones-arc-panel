import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavAltSideComponent } from "./nav-alt-side.component";

describe("NavAltSideComponent", () => {
  let component: NavAltSideComponent;
  let fixture: ComponentFixture<NavAltSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavAltSideComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavAltSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
