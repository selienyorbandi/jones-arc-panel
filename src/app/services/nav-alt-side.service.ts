import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NavAltSideService {
  isCommentsSectionOpen = false;

  @Output() toggleCommentsSection: EventEmitter<boolean> = new EventEmitter();
  toggle() {
    this.isCommentsSectionOpen = !this.isCommentsSectionOpen;
    this.toggleCommentsSection.emit(this.isCommentsSectionOpen);
  }
}
