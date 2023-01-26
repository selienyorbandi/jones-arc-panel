import { ActivatedRoute } from "@angular/router";
export function getKeyWordFromQueryParams(route: ActivatedRoute) {
  let keyword = "";
  route.queryParams.subscribe(params => {
    keyword = { ...params }["q"];
  });
  return keyword;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function search(entries: any[], search?: string) {
  if (search) {
    search = search.toLowerCase();
    return entries.filter(function (obj) {
      const keys: string[] = Object.keys(obj);
      return keys.some(function (key) {
        const value = obj[key];
        if (Array.isArray(value)) {
          return value.some(v => {
            return v.toLowerCase().includes(search);
          });
        } else if (!Array.isArray(value)) {
          return value.toLowerCase().includes(search);
        }
      });
    });
  }
  return entries;
}
