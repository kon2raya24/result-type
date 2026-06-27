
// Type exports for consumers
// Add specific types as needed
/**
 * tryResult<T>
 * @param fn
 */
export function tryResult<T>(fn: () => T): Result<T> {
  if (fn === null || fn === undefined) throw new Error("Invalid input");
  try { return ok(fn()); } catch (e) { return err(e instanceof Error ? e : new Error(String(e))); }
}
