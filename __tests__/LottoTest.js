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
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호는 1과 45의 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
});

describe("Lotto 도메인 로직 단위 테스트", () => {
  test("로또 생성 매서드", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });

  test("로또 생성 오류 메서드", () => {
    const invalidNumbers = [1, 2, 3, 4];
    expect(() => new Lotto(invalidNumbers)).toThrow();
  });

  test("checkLuckyNumber 동작 확인", () => {
    const luckyNumber = "1,2,3,4,5,6";
    const winNum = Lotto.checkLuckyNumber(luckyNumber);
    expect(winNum).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("checkLuckyNumber 예외 확인", () => {
    const invalidLuckyNumber = "1,2,3,4,5"; // 6개의 숫자가 아님
    expect(() => Lotto.checkLuckyNumber(invalidLuckyNumber)).toThrow();
  });
});
