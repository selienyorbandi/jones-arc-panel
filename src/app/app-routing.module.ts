import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "current-page-in-adobe-xd", pathMatch: "full" },
  { path: "page-a", component: AppComponent },
  { path: "page-b", component: AppComponent },
  { path: "page-c", component: AppComponent },
  { path: "page-d", component: AppComponent },
  { path: "page-e", component: AppComponent },
  { path: "page-f", component: AppComponent },
  { path: "current-page-in-adobe-xd", component: AppComponent },
  { path: "**", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
