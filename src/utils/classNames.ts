export function classNames(...classes: Array<boolean | string>): string {
  return classes.filter(Boolean).join(" ");
}
