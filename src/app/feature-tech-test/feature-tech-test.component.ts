import { catchError, tap, throwError } from "rxjs";
import { StrategyMapsService } from "../services/strategy-maps.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feature-tech-test",
  templateUrl: "./feature-tech-test.component.html",
  styleUrls: ["./feature-tech-test.component.css"]
})
export class FeatureTechTestComponent implements OnInit {
  isLoading = true;
  error = false;
  constructor(private strategyMapsService: StrategyMapsService) {}

  ngOnInit(): void {
    this.strategyMapsService
      .getAllStrategyMapsData()
      .pipe(
        tap(res => {
          this.isLoading = false;
          return res;
        }),
        catchError(err => {
          this.error = true;
          this.isLoading = false;
          return throwError(() => new Error(err));
        })
      )
      .subscribe();
  }
}
