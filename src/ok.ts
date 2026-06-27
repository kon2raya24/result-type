export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };
/**
 * ok<T>
 * @param value
 */
export function ok<T>(value: T): Result<T, never> {
  if (value === null || value === undefined) throw new Error("Invalid input");
  return { ok: true, value };
}
