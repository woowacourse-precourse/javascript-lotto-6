// const { default: test } = require("node: test");
// const fn = require("./fn");

// test("2더하기 3은 5야", () => {
//   expect(fn.add(2, 3).toBe(5));
// });
describe("계산 테스트", () => {
  const a = 1,
    b = 2;

  test("a + b는 3이다."),
    () => {
      expect(a + b).toEqual(3);
    };
});
