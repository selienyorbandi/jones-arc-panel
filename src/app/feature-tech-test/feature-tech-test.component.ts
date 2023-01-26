import { IObjective } from "./../models/objective.interface";
import { catchError, Subscription, tap, throwError, filter } from "rxjs";
import { StrategyMapsService } from "../services/strategy-maps.service";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { UserConfig } from "gridjs";
import {
  adaptObjectiveForSearch,
  adaptObjectives
} from "../adapters/objectives.adapter";
import { html } from "gridjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { getKeyWordFromQueryParams, search } from "../utils/search";
@Component({
  selector: "app-feature-tech-test",
  templateUrl: "./feature-tech-test.component.html",
  styleUrls: ["./feature-tech-test.component.css"]
})
export class FeatureTechTestComponent implements OnInit {
  isLoading = true;
  error = false;
  objectivesData: IObjective[] = [];
  routeSubscriber!: Subscription;
  selectedSetOfData = "objectives";

  gridConfig: UserConfig = {};

  constructor(
    private strategyMapsService: StrategyMapsService,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  selectSetOfData(dataName: string) {
    this.selectedSetOfData = dataName;
  }

  ngOnInit(): void {
    this.strategyMapsService
      .getAllObjectives()
      .pipe(
        tap(res => {
          this.isLoading = false;
          this.objectivesData = res;

          this.gridConfig = {
            sort: { multiColumn: false },
            columns: [
              "code",
              "name",
              "description",
              "perspective",
              {
                name: html(
                  "<img src='../../assets/icon/three-dots-vertical.svg'/>"
                ),
                id: "...",
                sort: false
              }
            ],
            data: adaptObjectives(
              search(
                adaptObjectiveForSearch(this.objectivesData),
                getKeyWordFromQueryParams(this.route)
              )
            ),
            pagination: true,
            fixedHeader: true
          };

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

  ngDoCheck() {
    this.routeSubscriber = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.strategyMapsService
          .getAllObjectives()
          .pipe(
            tap(res => {
              this.isLoading = false;
              this.objectivesData = res;

              this.gridConfig = {
                sort: { multiColumn: false },
                columns: [
                  "code",
                  "name",
                  "description",
                  "perspective",
                  {
                    name: html(
                      "<img src='../../assets/icon/three-dots-vertical.svg'/>"
                    ),
                    id: "...",
                    sort: false
                  }
                ],
                data: adaptObjectives(
                  search(
                    adaptObjectiveForSearch(this.objectivesData),
                    getKeyWordFromQueryParams(this.route)
                  )
                ),
                pagination: true,
                fixedHeader: true
              };

              return res;
            }),
            catchError(err => {
              this.error = true;
              this.isLoading = false;
              return throwError(() => new Error(err));
            })
          )
          .subscribe();
      });
  }

  ngOnDestroy() {
    this.routeSubscriber?.unsubscribe();
  }
}
