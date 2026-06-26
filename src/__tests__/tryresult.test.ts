import { describe, it, expect } from "vitest";
import { tryResult } from "../tryresult";

describe("tryResult", () => {
  it("should be a function", () => {
    expect(typeof tryResult).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => tryResult(null as any)).toThrow();
  });
});
