import { expect } from "chai";
import { Add } from "../index.js";

describe("String calculator", () => {
  it("should return 0 if empty string is passed", () => {
    expect(Add("")).to.equal(0);
  });
});
