import { IObjective } from "./../models/objective.interface";
import { html } from "gridjs";

export function adaptObjective(objective: IObjective) {
  if (objective) {
    const slicedDescription = `<span>${objective.description.slice(
      0,
      15
    )}...</span>`;
    return {
      code: `${objective.code} Objective`,
      name: objective.name,
      description: html(slicedDescription),
      perspective: objective.perspective.name,
      "...": html(
        "<button class='border py-1 px-2' style='background: none'><img src='../../assets/icon/three-dots.svg'/>"
      )
    };
  } else {
    return {};
  }
}

export function adaptObjectives(objectives: IObjective[]) {
  return objectives.map(objective => adaptObjective(objective));
}