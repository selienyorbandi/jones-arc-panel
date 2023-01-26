import { Renderer2 } from "@angular/core";
export function insertButtonToButtonWrapper(
  renderer: Renderer2,
  wrapper: HTMLElement
) {
  const plusIconCont = renderer.createElement("div");
  renderer.addClass(plusIconCont, "add-kpi-container__plus");

  const plusIcon = renderer.createElement("img");
  renderer.setProperty(plusIcon, "src", "../../assets/icon/plus-lg.svg");
  renderer.setProperty(plusIcon, "alt", "Add new KPI");
  renderer.appendChild(plusIconCont, plusIcon);
  renderer.appendChild(wrapper, plusIconCont);

  const textAddKpi = renderer.createElement("a");
  renderer.setProperty(textAddKpi, "innerHTML", "Add New KPI");
  renderer.setProperty(textAddKpi, "id", "add-kpi");
  renderer.addClass(textAddKpi, "square-btn");
  renderer.appendChild(wrapper, textAddKpi);

  const caretDownIconCont = renderer.createElement("div");
  renderer.addClass(caretDownIconCont, "add-kpi-container__caret");

  const caretDownIcon = renderer.createElement("img");
  renderer.setProperty(
    caretDownIcon,
    "src",
    "../../assets/icon/caret-down-fill.svg"
  );
  renderer.setProperty(caretDownIcon, "alt", "View more details about add kpi");
  renderer.appendChild(caretDownIconCont, caretDownIcon);
  renderer.appendChild(wrapper, caretDownIconCont);
}

export function insertButtonToTableHead(wrapper: HTMLElement) {
  const grid_js_head = document.querySelector(".gridjs-head");
  const gridjs_search = document.querySelector(".gridjs-search");
  const btnAddKpi = document.querySelector("#add-kpi");
  if (grid_js_head && !btnAddKpi)
    grid_js_head.insertBefore(wrapper, gridjs_search);
}
