import { SearchBarComponent } from "./../components/search-bar/search-bar.component";
import { CommentComponent } from "./components/comments-section/comment/comment.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureTechTestComponent } from "./feature-tech-test.component";
import { FeatureTechTestRoutingModule } from "./feature-tech-test-routing.module";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { CommentsSectionComponent } from "./components/comments-section/comments-section.component";
import { CommentFormComponent } from "./components/comments-section/comment-form/comment-form.component";
import { GridJsAngularModule } from "gridjs-angular";
import { AddKpiBtnComponent } from "./components/add-kpi-btn/add-kpi-btn.component";
import { SectionSelectorsComponent } from "./components/section-selectors/section-selectors.component";

@NgModule({
  declarations: [
    FeatureTechTestComponent,
    CommentsSectionComponent,
    CommentFormComponent,
    CommentComponent,
    AddKpiBtnComponent,
    SectionSelectorsComponent
  ],
  imports: [
    CommonModule,
    FeatureTechTestRoutingModule,
    SpinnerComponent,
    GridJsAngularModule,
    SearchBarComponent
  ]
})
export class FeatureTechTestModule {}
