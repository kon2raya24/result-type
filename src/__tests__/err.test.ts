import { describe, it, expect } from "vitest";
import { err } from "../err";

describe("err", () => {
  it("should be a function", () => {
    expect(typeof err).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => err(null as any)).toThrow();
  });
});
