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

  test("로또의 번호가 1~45 사이가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 47]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 입력받은 로또번호와 중복이라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 47]).setBonusNumber(5);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순으로 정렬이 되는지 테스트", async () => {
    const input = [2, 10, 5, 24, 30, 22];
    const output = [2, 5, 10, 22, 24, 30];

    const lotto = new Lotto(input);
    const result = lotto.getSortedNumbers();

    expect(result).toEqual(output);
  });
});
