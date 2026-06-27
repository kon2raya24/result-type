
// Type exports for consumers
// Add specific types as needed
export function tryResult<T>(fn: () => T): Result<T> {
  try { return ok(fn()); } catch (e) { return err(e instanceof Error ? e : new Error(String(e))); }
}
