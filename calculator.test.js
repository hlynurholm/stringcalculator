const add = require("./calculator"); //import calculator

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return sum of multiple numbers", () => {
	expect(add("1,2,3,4")).toBe(10);
});

it("should return sum of multiple numbers (also negative numbers", () => {
	expect(add("1,2,-3,4")).toBe(4);
});

it("should return sum of multiple numbers divided by commas and new line", () => {
	expect(add("1\n2,3")).toBe(6);
});