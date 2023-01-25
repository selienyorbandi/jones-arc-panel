import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FeatureTechTestComponent } from "./feature-tech-test.component";

describe("FeatureTechTestComponent", () => {
  let component: FeatureTechTestComponent;
  let fixture: ComponentFixture<FeatureTechTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureTechTestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTechTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
