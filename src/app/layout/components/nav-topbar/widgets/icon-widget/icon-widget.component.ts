import { Component, Input } from "@angular/core";

@Component({
  selector: "app-icon-widget",
  templateUrl: "./icon-widget.component.html",
  styleUrls: ["./icon-widget.component.css"]
})
export class IconWidgetComponent {
  @Input() imgSrc = "";
  @Input() title = "Do something";
  @Input() handleClick?: () => void;
  @Input() isHighlighted = false;
}
