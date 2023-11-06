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
  test("generateNumbers(): 로또 번호 배열이 6개의 숫자로 이루어져 있어야 한다.", () => {
    const lottoNumbers = Lotto.generateNumbers(1);
    expect(lottoNumbers.length).toBe(1);
    expect(lottoNumbers[0].length).toBe(6);
  });

  test("generateNumbers(): 로또 번호 배열의 숫자는 1부터 45 사이의 숫자여야 한다.", () => {
    const lottoNumbers = Lotto.generateNumbers(1)[0];
    const isAllNumbersInRange = lottoNumbers.every(
      (number) => number >= 1 && number <= 45
    );
    expect(isAllNumbersInRange).toBe(true);
  });
});
