export async function tryAsyncResult<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try { return ok(await fn()); } catch (e) { return err(e instanceof Error ? e : new Error(String(e))); }
}
