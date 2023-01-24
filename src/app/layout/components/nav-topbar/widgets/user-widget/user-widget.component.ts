import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-widget",
  templateUrl: "./user-widget.component.html",
  styleUrls: ["./user-widget.component.css"]
})
export class UserWidgetComponent implements OnInit {
  userName = "";
  userAvatar = "";

  ngOnInit(): void {
    // Here I'd get the user's name and image from a service
    this.userName = "Selien";
    this.userAvatar =
      "https://selienyorbandi.com/static/media/selienyorbandi.0580c6f615a81777f2e8.webp";
  }
}
