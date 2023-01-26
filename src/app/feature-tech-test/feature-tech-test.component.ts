import { IPerspective } from "./../models/perspective.interface";
import { IObjective } from "./../models/objective.interface";
import { catchError, Subscription, tap, throwError, filter } from "rxjs";
import { StrategyMapsService } from "../services/strategy-maps.service";
import { Component, OnInit } from "@angular/core";
import { UserConfig } from "gridjs";
import {
  adaptObjectiveForSearch,
  adaptObjectives
} from "../adapters/objectives.adapter";
import { html } from "gridjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { getKeyWordFromQueryParams, search } from "../utils/search";
import { adaptPerspectives } from "../adapters/perspectives.adapter";
@Component({
  selector: "app-feature-tech-test",
  templateUrl: "./feature-tech-test.component.html",
  styleUrls: ["./feature-tech-test.component.css"]
})
export class FeatureTechTestComponent implements OnInit {
  isLoading = true;
  error = false;
  objectivesData: IObjective[] = [];
  perspectivesData: IPerspective[] = [];
  routeSubscriber!: Subscription;
  selectedSetOfData = "objectives";
  gridConfig: UserConfig = {};

  constructor(
    private strategyMapsService: StrategyMapsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.selectedSetOfData === "objectives") {
      this.setGridOfObjectives();
    }
    if (this.selectedSetOfData === "perspectives") {
      this.setGridOfPerspectives();
    }
  }

  ngDoCheck() {
    this.routeSubscriber = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.selectedSetOfData === "objectives") {
          this.setGridOfObjectives();
        }
        if (this.selectedSetOfData === "perspectives") {
          this.setGridOfPerspectives();
        }
      });
  }

  ngOnDestroy() {
    this.routeSubscriber?.unsubscribe();
  }

  selectSetOfData(dataName: string) {
    this.selectedSetOfData = dataName;
  }

  changeSelectedSetOfData(data: string) {
    this.selectedSetOfData = data;
    if (this.selectedSetOfData === "objectives") {
      this.setGridOfObjectives();
    }
    if (this.selectedSetOfData === "perspectives") {
      this.setGridOfPerspectives();
    }
  }

  setGridOfObjectives() {
    this.strategyMapsService
      .getAllObjectives()
      .pipe(
        tap(res => {
          this.isLoading = false;
          this.objectivesData = res;

          this.gridConfig = {
            sort: { multiColumn: false },
            data: adaptObjectives(
              search(
                adaptObjectiveForSearch(this.objectivesData),
                getKeyWordFromQueryParams(this.route)
              )
            ),
            columns: [
              "code",
              "name",
              "description",
              "perspective",
              {
                name: html(
                  "<img src='../../assets/icon/three-dots-vertical.svg' alt='View more'/>"
                ),
                id: "...",
                sort: false
              }
            ],
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
  setGridOfPerspectives() {
    this.strategyMapsService
      .getAllPerspectives()
      .pipe(
        tap(res => {
          this.isLoading = false;
          this.perspectivesData = res;
          if (res) {
            this.gridConfig = {
              sort: { multiColumn: false },
              data: adaptPerspectives(res),
              columns: ["id", "name"],
              pagination: true,
              fixedHeader: true
            };
          }
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
