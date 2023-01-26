import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section-selectors",
  templateUrl: "./section-selectors.component.html",
  styleUrls: ["./section-selectors.component.css"]
})
export class SectionSelectorsComponent {
  @Input() selectedSetOfData = "objectives";
  @Input() selectSetOfData!: (d: string) => void;
}
