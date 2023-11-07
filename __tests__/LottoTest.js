import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복이 없어야 합니다.");
  });

  test("로또 번호가 1~45값이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 48, 4, 5, 6]);
    }).toThrow("[ERROR] 1~45 사이 값을 입력해 주세요.");
  });

  test("로또 번호가 정수가 아니면 예외처리", () => {
    expect(() => {
      new Lotto([1, 2, "ab", 4, 5, 6]);
    }).toThrow("[ERROR] 정수를 입력해 주세요.");
  });

});
