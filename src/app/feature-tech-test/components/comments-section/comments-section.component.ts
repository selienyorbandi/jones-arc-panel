import { IComment } from "src/app/models/comment.interface";
import { tap } from "rxjs";
import { StrategyMapsService } from "./../../../services/strategy-maps.service";
import { NavAltSideService } from "./../../../services/nav-alt-side.service";
import { Component, DoCheck, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-comments-section",
  templateUrl: "./comments-section.component.html",
  styleUrls: ["./comments-section.component.css"]
})
export class CommentsSectionComponent implements OnInit, DoCheck {
  @HostBinding("class.is-open")
  isCommentsSectionOpen = false;
  comments: IComment[] = [];

  constructor(
    private navAltSideService: NavAltSideService,
    private strategyMapsService: StrategyMapsService
  ) {}

  ngDoCheck(): void {
    if (this.isCommentsSectionOpen && !this.comments.length) {
      this.strategyMapsService
        .getAllComments()
        .pipe(
          tap(res => {
            this.comments = res;
            return res;
          })
        )
        .subscribe();
    }
  }

  ngOnInit(): void {
    this.navAltSideService.toggleCommentsSection.subscribe(
      isCommentsSectionOpen => {
        this.isCommentsSectionOpen = isCommentsSectionOpen;
      }
    );
  }
}
