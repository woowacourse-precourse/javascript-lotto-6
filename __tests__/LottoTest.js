import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  const testLottoRank = (numbers, winNumbers, bounsNum, rank) => {
    test(`로또 등수 확인 - ${rank}등`, () => {
      expect(
        (() => {
          const lotto = new Lotto(numbers);
          return lotto.checkLottoLank(winNumbers, bounsNum);
        })()
      ).toEqual(rank);
    });
  };

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

  //1등
  const lottoNumAry = [
    [],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 8],
    [1, 2, 3, 4, 7, 8],
    [1, 2, 3, 7, 8, 9],
    [1, 7, 8, 9, 10, 11],
  ];
  const winNumAry = [
    [],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ];
  const bonusNumAry = [0, 7, 6, 7, 7, 7, 7];

  for (let rank = 1; rank <= 6; rank++) {
    testLottoRank(lottoNumAry[rank], winNumAry[rank], bonusNumAry[rank], rank);
  }
});
