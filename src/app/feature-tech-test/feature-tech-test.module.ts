import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureTechTestComponent } from "./feature-tech-test.component";
import { FeatureTechTestRoutingModule } from "./feature-tech-test-routing.module";

@NgModule({
  declarations: [FeatureTechTestComponent],
  imports: [CommonModule, FeatureTechTestRoutingModule]
})
export class FeatureTechTestModule {}
