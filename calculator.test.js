const add = require("./calculator"); //import calculator

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
)};