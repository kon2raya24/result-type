import { describe, it, expect } from "vitest";
import { tryAsyncResult } from "../tryasyncresult";

describe("tryAsyncResult", () => {
  it("should be a function", () => {
    expect(typeof tryAsyncResult).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => tryAsyncResult(null as any)).toThrow();
  });
});
