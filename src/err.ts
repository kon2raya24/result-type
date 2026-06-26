export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}
