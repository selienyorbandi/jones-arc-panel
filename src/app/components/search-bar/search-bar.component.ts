import { FormsModule } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent {
  @Input() placeholderTxt = "Search";
  @Input() hasCaretDown = false;
  keywords = "";

  constructor(private router: Router) {}

  search() {
    this.router.navigate(["/current-page-in-adobe-xd"], {
      queryParams: { q: this.keywords }
    });
  }
}
