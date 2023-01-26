import { IPerspective } from "./../models/perspective.interface";

function adaptPerspective(perspective: IPerspective) {
  if (perspective) return perspective;
  return {};
}

export function adaptPerspectives(perspectives: IPerspective[]) {
  return perspectives.map(perspective => adaptPerspective(perspective));
}
