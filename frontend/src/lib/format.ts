export function formatPersianNumber(value: number | string) {
  return new Intl.NumberFormat("fa-IR").format(Number(value));
}

export function formatPersianDate(value: string | Date) {
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) {
    return typeof value === "string" ? value : "";
  }
  return new Intl.DateTimeFormat("fa-IR", { dateStyle: "medium" }).format(date);
}
