export function formatDatePoint(date: Date | string) {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayNumber = date.getDate();
  return `${dayNumber}.${month}.${year}`;
}
export const optionsDateLocal = {
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  month: "long",
  day: "numeric",
};