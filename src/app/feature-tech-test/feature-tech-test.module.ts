import { CommentComponent } from "./components/comments-section/comment/comment.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureTechTestComponent } from "./feature-tech-test.component";
import { FeatureTechTestRoutingModule } from "./feature-tech-test-routing.module";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { CommentsSectionComponent } from "./components/comments-section/comments-section.component";
import { CommentFormComponent } from "./components/comments-section/comment-form/comment-form.component";

@NgModule({
  declarations: [
    FeatureTechTestComponent,
    CommentsSectionComponent,
    CommentFormComponent,
    CommentComponent
  ],
  imports: [CommonModule, FeatureTechTestRoutingModule, SpinnerComponent]
})
export class FeatureTechTestModule {}
