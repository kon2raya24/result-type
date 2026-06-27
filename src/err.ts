
// Type exports for consumers
// Add specific types as needed
export function err<E>(error: E): Result<never, E> {
  if (error === null || error === undefined) throw new Error("Invalid input");
  return { ok: false, error };
}
