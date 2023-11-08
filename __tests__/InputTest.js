import checkPriceInput from "../src/components/getLottoPriceInput";

describe("입력 값 테스트", () => {
  test("입력 값을 출력한다.", () => {
    expect(() => checkPriceInput("800")).toThrow("[ERROR]");
  });
});
