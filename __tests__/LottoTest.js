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

  test("로또 번호가 1~45 사이가 아니라면, 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 47]);
    }).toThrow("[ERROR]");
  });

  test("올바른 로또 번호를 발행한다.", () => {

    const lotto = new Lotto([1, 2, 3, 4, 5, 6])

    expect(lotto).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("구매한 로또 번호를 오름차순으로 출력한다.", () => {
    const INPUT = [21, 8, 23, 42, 43, 41];
    const OUTPUT = [8, 21, 23, 41, 42, 43];
  
    const result = new Lotto(INPUT);
  
    expect(result).toEqual(OUTPUT);
  });
});
