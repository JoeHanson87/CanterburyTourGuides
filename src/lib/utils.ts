/**
 * Returns today's date as a string in YYYY-MM-DD format, suitable for
 * use as an HTML date input `min` attribute.
 */
export function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0]
}
