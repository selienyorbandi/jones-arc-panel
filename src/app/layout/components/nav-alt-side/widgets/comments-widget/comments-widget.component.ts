import { NavAltSideService } from "./../../../../../services/nav-alt-side.service";
import { StrategyMapsService } from "../../../../../services/strategy-maps.service";
import { tap } from "rxjs";
import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-comments-widget",
  templateUrl: "./comments-widget.component.html",
  styleUrls: ["./comments-widget.component.css"]
})
export class CommentsWidgetComponent implements OnInit {
  messagesQuantity = 0;
  isSelected = false;

  constructor(
    private strategyMapsService: StrategyMapsService,
    private navAltSideService: NavAltSideService
  ) {}

  ngOnInit(): void {
    this.strategyMapsService
      .getAllComments()
      .pipe(
        tap(res => {
          this.messagesQuantity = res.length;
          return res;
        })
      )
      .subscribe();
  }

  @HostListener("click")
  click() {
    this.navAltSideService.toggle();
    this.isSelected = !this.isSelected;
  }
}
