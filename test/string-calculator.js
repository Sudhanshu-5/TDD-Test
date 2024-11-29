import { expect } from "chai";
import { Add } from "../index.js";

describe("String calculator", () => {
  it("should return 0 if empty string is passed", () => {
    expect(Add("")).to.equal(0);
  });

  it("should return digit if single char digit passed", () => {
    expect(Add("1")).to.equal(1);
  });

  it("should return sum if multiple chars are passed", () => {
    expect(Add("1,2,3")).to.equal(6);
  });

  it("should return sum if new lines are passed between numbers", () => {
    expect(Add("1\n2,3")).to.equal(6);
  });

  it("should return sum if pattern is //[delimiter]\n[numbers…]", () => {
    expect(Add("//;\n1;2")).to.equal(3);
  });

  it("should return Negative numbers not allowed: <numbers> for negative nums", () => {
    expect(() => Add("-1,-2,3")).to.throw("negatives not allowed: -1, -2");
    expect(() => Add("-1, 2,3")).to.throw("negatives not allowed: -1");
  });
});
