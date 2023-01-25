import { SearchBarComponent } from "./../components/search-bar/search-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavSidebarComponent } from "./components/nav-sidebar/nav-sidebar.component";
import { RouterModule } from "@angular/router";
import { NavTopbarComponent } from "./components/nav-topbar/nav-topbar.component";
import { MenuItemComponent } from "./components/nav-sidebar/menu-item/menu-item.component";
import { UserWidgetComponent } from "./components/nav-topbar/widgets/user-widget/user-widget.component";
import { IconWidgetComponent } from "./components/nav-topbar/widgets/icon-widget/icon-widget.component";
import { BreadcrumbComponent } from "./components/nav-topbar/widgets/breadcrumb/breadcrumb.component";
import { SectionTitleComponent } from "./components/nav-topbar/widgets/section-title/section-title.component";
import { NavAltSideComponent } from "./components/nav-alt-side/nav-alt-side.component";
import { FilterWidgetComponent } from "./components/nav-alt-side/widgets/filter-widget/filter-widget.component";
import { CommentsWidgetComponent } from "./components/nav-alt-side/widgets/comments-widget/comments-widget.component";

@NgModule({
  declarations: [
    NavSidebarComponent,
    NavTopbarComponent,
    MenuItemComponent,
    UserWidgetComponent,
    IconWidgetComponent,
    BreadcrumbComponent,
    SectionTitleComponent,
    NavAltSideComponent,
    FilterWidgetComponent,
    CommentsWidgetComponent
  ],
  imports: [CommonModule, RouterModule, SearchBarComponent],
  exports: [
    NavSidebarComponent,
    NavTopbarComponent,
    NavAltSideComponent,
    CommentsWidgetComponent
  ]
})
export class LayoutModule {}
