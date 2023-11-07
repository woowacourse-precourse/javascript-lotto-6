import LottoAnswer from "../src/model/LottoAnswer.js";

describe("로또 정답 클래스 테스트", () => {

  test("보너스 번호가 1~45값이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoAnswer("1,2,3,4,5,6").setBonusNumber(48);
    }).toThrow("[ERROR] 1~45 사이 값을 입력해 주세요.");
  });

  test("보너스 번호가 1~45값이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoAnswer("1,2,3,4,5,6").setBonusNumber(0);
    }).toThrow("[ERROR] 1~45 사이 값을 입력해 주세요.");
  });

	test("보너스 번호는 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoAnswer("1,2,3,4,5,6").setBonusNumber(3);
    }).toThrow("[ERROR] 로또 번호는 중복이 없어야 합니다.");
  });

	test("보너스 번호 길이가 1이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoAnswer("1,2,3,4,5,6").setBonusNumber("3,5");
    }).toThrow("[ERROR] 보너스 번호는 1개여야 합니다");
  });

});
