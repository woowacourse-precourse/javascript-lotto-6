import Budget from "../src/Budget";

describe("예산 클래스 테스트", () => {
  test("로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Budget("1400");
    }).toThrow("[ERROR] 로또 구입 금액은 1000원 단위로 입력할 수 있습니다.");
  });

  // 아래에 추가 테스트 작성 가능
});
