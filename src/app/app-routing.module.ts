import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "current-page-in-adobe-xd", pathMatch: "full" },
  { path: "page-a", component: HomeComponent },
  { path: "page-b", component: HomeComponent },
  { path: "page-c", component: HomeComponent },
  { path: "page-d", component: HomeComponent },
  { path: "page-e", component: HomeComponent },
  { path: "page-f", component: HomeComponent },
  {
    path: "current-page-in-adobe-xd",
    loadChildren: () =>
      import("./feature-tech-test/feature-tech-test.module").then(
        m => m.FeatureTechTestModule
      )
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
