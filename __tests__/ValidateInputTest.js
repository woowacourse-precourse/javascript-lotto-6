import Model from "../src/model/Model.js";

describe("인풋 예외 테스트", () => {
  let model;
  beforeEach(() => {
    model = new Model();
  });

  test.each([["123"], ["10000j"], ["-1000"], [""]])("구매 가격 인풋 예외 테스트", (input) => {
    expect(() => {
      model.makeLotto(input);
    }).toThrow("[ERROR]");
  });

  test.each([
    { lottoNums: "1,2,3,4,5,k", bonusNum: "7" },
    { lottoNums: "1,2,3,4,5,60", bonusNum: "7" },
    { lottoNums: "1,2.3,3,4,5,6", bonusNum: "7" },
    { lottoNums: "1,2,3,4,5,6,7", bonusNum: "8" },
    { lottoNums: "1,2,3,4,6,6", bonusNum: "7" },
    { lottoNums: "1,2,3,4,5,6", bonusNum: "k" },
    { lottoNums: "1,2,3,4,5,6", bonusNum: "70" },
    { lottoNums: "1,2,3,4,5,6", bonusNum: "7.3" },
    { lottoNums: "1,2.3,4,5,6", bonusNum: "6" },
    { lottoNums: "1,,3,4,5,6", bonusNum: "7" },
  ])("로또 번호 인풋 예외 테스트", ({ lottoNums, bonusNum }) => {
    expect(() => {
      model.compareWinLotto(lottoNums, bonusNum);
    }).toThrow("[ERROR]");
  });
});
