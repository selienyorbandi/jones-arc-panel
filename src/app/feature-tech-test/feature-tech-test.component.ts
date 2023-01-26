import { IObjective } from "./../models/objective.interface";
import { catchError, tap, throwError } from "rxjs";
import { StrategyMapsService } from "../services/strategy-maps.service";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { h, PluginPosition, UserConfig } from "gridjs";
import { adaptObjectives } from "../adapters/objectives.adapter";
import { html } from "gridjs";
import {
  insertButtonToButtonWrapper,
  insertButtonToTableHead
} from "../utils/insertBtnToTableHead";

@Component({
  selector: "app-feature-tech-test",
  templateUrl: "./feature-tech-test.component.html",
  styleUrls: ["./feature-tech-test.component.css"]
})
export class FeatureTechTestComponent implements OnInit {
  isLoading = true;
  error = false;
  objectivesData: IObjective[] = [];
  public gridConfig: UserConfig = {};

  constructor(
    private strategyMapsService: StrategyMapsService,
    private renderer: Renderer2
  ) {}

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
            data: adaptObjectives(this.objectivesData),
            pagination: true,
            language: {
              search: {
                placeholder: "Search..."
              }
            },
            fixedHeader: true,
            search: true
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

  insertCustomComponents() {
    const button_wrapper = this.renderer.createElement("div");
    this.renderer.addClass(button_wrapper, "add-kpi-container");
    insertButtonToButtonWrapper(this.renderer, button_wrapper);
    insertButtonToTableHead(button_wrapper);
  }

  ngDoCheck() {
    this.insertCustomComponents();
  }
}
