import { describe, it, expect } from "vitest";
import { ok } from "../ok";

describe("ok", () => {
  it("should be a function", () => {
    expect(typeof ok).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => ok(null as any)).toThrow();
  });
});
