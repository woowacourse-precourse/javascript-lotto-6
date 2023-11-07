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

  test("로또 리스트 오름차순 정렬", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    const result = lotto.sortLottoList();

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 당첨 번호와 일치 갯수 구하기", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeList = [1, 2, 3, 4, 5, 6];

    const result = lotto.getMatchedCount(prizeList);

    expect(result).toEqual(6);
  });

  test("번호 5개 일치시 남은 번호가 보너스 번호와 일치할때 true 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeList = [1, 2, 3, 4, 5, 7];
    const bonus = 6;

    const result = lotto.validateIncludeBonus(prizeList, bonus);

    expect(result).toEqual(true);
  });

  test("번호 5개 일치시 남은 번호가 보너스 번호와 일치하지 않을때 false 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeList = [1, 2, 3, 4, 5, 7];
    const bonus = 8;

    const result = lotto.validateIncludeBonus(prizeList, bonus);

    expect(result).toEqual(false);
  });

  test("당첨 결과 등수 갯수 구하기 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeList = [1, 2, 3, 4, 5, 6];
    const resultList = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];
    const bonus = 8;

    const output = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 1 },
    ];

    const result = lotto.getWinningList(prizeList, resultList, bonus);

    expect(result).toEqual(output);
  });
});
