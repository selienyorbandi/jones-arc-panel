import { IObjective } from "./../models/objective.interface";
import { IComment } from "./../models/comment.interface";
import { IPerspective } from "./../models/perspective.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "./services.properties";

type IStrategyMapsData = [IPerspective[], IComment[], IObjective[]];

@Injectable({
  providedIn: "root"
})
export class StrategyMapsService {
  rootEndpoint = "83ce313f7f07455ce077";
  constructor(private http: HttpClient) {}

  public getAllStrategyMapsData(): Observable<IStrategyMapsData> {
    return this.http.get<IStrategyMapsData>(`${API_URL}${this.rootEndpoint}`);
  }

  public getAllPerspectives(): Observable<IPerspective[]> {
    return this.http.get<IPerspective[]>(
      `${API_URL}${this.rootEndpoint}/perspectives`
    );
  }

  public getAllObjectives(): Observable<IObjective[]> {
    return this.http.get<IObjective[]>(
      `${API_URL}${this.rootEndpoint}/objectives`
    );
  }

  public getAllComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${API_URL}${this.rootEndpoint}/comments`);
  }
}
