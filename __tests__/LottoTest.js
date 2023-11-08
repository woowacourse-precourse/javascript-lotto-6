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

  test("로또 번호가 1보다 작거나 45보다 큰 수가 있으면 예외가 발생한다.", () => {
    // given
    const lottoList = [
      [0, 1, 3, 5, 10],
      [1, 3, 44, 45, 46],
    ];

    // when & then
    lottoList.forEach((lotto) => {
      expect(() => {
        new Lotto(lotto);
      }).toThrow();
    });
  });
});
