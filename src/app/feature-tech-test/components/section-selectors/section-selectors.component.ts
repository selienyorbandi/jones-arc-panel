import { Router } from "@angular/router";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-section-selectors",
  templateUrl: "./section-selectors.component.html",
  styleUrls: ["./section-selectors.component.css"]
})
export class SectionSelectorsComponent {
  @Input() selectedSetOfData = "objectives";
  @Input() selectSetOfData!: (d: string) => void;
  @Output() changeDataSelectedEvent: EventEmitter<string> = new EventEmitter();

  handleChange(d: string) {
    this.selectSetOfData(d);
    this.changeDataSelectedEvent.emit(d);
  }
  constructor(private router: Router) {}
}
