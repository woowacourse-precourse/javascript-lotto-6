import Model from "../src/model/Model.js";

describe("인풋 예외 테스트", () => {
  const model = new Model();
  test.each([["123"], ["10000j"], ["-1000"]])("구매 가격 인풋 예외 테스트", (input) => {
    expect(model.makeLotto.bind(null, input)).toThrow("[ERROR]");
  });
});
