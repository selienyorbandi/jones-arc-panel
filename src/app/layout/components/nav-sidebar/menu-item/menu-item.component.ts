import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"]
})
export class MenuItemComponent {
  @Input() routerHref = "";
  @Input() iconSrc = "";
  altImg = "Go to " + this.routerHref;
}
