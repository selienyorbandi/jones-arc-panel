import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent {
  @Input() placeholderTxt = "Search";
  @Input() hasCaretDown = false;
}
