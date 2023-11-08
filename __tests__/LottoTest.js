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
  test("로또 등수 확인 - 1등", () => {
    expect(
      (() => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        return lotto.checkLottoLank([1, 2, 3, 4, 5, 6], 7);
      })()
    ).toEqual(1);
  });

  test("로또 등수 확인 - 2등", () => {
    expect(
      (() => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        return lotto.checkLottoLank([1, 2, 3, 4, 5, 7], 6);
      })()
    ).toEqual(2);
  });

  test("로또 등수 확인 - 3등", () => {
    expect(
      (() => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
        return lotto.checkLottoLank([1, 2, 3, 4, 5, 6], 7);
      })()
    ).toEqual(3);
  });

  test("로또 등수 확인 - 4등", () => {
    expect(
      (() => {
        const lotto = new Lotto([1, 2, 3, 4, 7, 8]);
        return lotto.checkLottoLank([1, 2, 3, 4, 5, 6], 7);
      })()
    ).toEqual(4);
  });

  test("로또 등수 확인 - 5등", () => {
    expect(
      (() => {
        const lotto = new Lotto([1, 2, 3, 7, 8, 9]);
        return lotto.checkLottoLank([1, 2, 3, 4, 5, 6], 7);
      })()
    ).toEqual(5);
  });

  test("로또 등수 확인 - 6등", () => {
    expect(
      (() => {
        const lotto = new Lotto([1, 7, 8, 9, 10, 11]);
        return lotto.checkLottoLank([1, 2, 3, 4, 5, 6], 7);
      })()
    ).toEqual(6);
  });
});
