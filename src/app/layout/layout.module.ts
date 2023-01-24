import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavSidebarComponent } from "./components/nav-sidebar/nav-sidebar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavSidebarComponent]
})
export class LayoutModule {}
