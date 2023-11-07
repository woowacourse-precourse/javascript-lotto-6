import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 서로 다른 숫자 6개를 입력하세요.");
  });

  test("로또 번호는 1이상 45이하다.", () => {
    expect(() => {
      new Lotto([1,2,3,4,5,46]);
    }).toThrow("[ERROR] 숫자는 최소 1 최대 45 까지 입니다.");
  });

  test("로또 번호는 숫자여야한다.", () => {
    expect(() => {
      new Lotto([1,2,3,4,"H",45]);
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  // 아래에 추가 테스트 작성 가능
});
