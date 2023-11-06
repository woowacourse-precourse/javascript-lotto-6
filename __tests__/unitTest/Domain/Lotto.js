import Lotto from "../../../src/Lotto";

describe("Lotto.constructor - 기능", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 45]],
    [[1, 6, 2, 3, 4, 7]],
  ])(
    "당첨 번호(%s)가 주어질 때, Lotto 객체는 정상적으로 생성되어야 한다.",
    (numbers) => {
      // then
      expect(() => new Lotto(numbers)).not.toThrow("[ERROR]");
    },
  );
});

describe("Lotto.constructor - 예외", () => {
  test.each([
    [[1, 2, 3, 4], "원소의 개수"],
    [[1, 2, 3, 4, 5, 6, 7], "원소의 개수"],
    [[-1, -2, -3, -4, -5, -6], "원소의 범위"],
    [[0, 1, 2, 3, 4, 5], "원소의 범위"],
    [[1, 2, 3, 4, 5, 46], "원소의 범위"],
    [[1, 1, 2, 3, 4, 5], "중복"],
  ])(
    "당첨 번호(%s)가 주어질 때, Lotto 객체를 생성할 경우, %s의 문제로 에러를 발생시켜야 한다.",
    (numbers) => {
      // then
      expect(() => new Lotto(numbers)).toThrow("[ERROR]");
    },
  );
});

describe("Lotto.validateBonusNumber - 기능", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 7],
    [[1, 2, 3, 4, 5, 6], 45],
    [[1, 2, 4, 5, 6, 7], 3],
  ])(
    "당첨 번호(%s)가 주어졌을 때, 보너스 번호(%s)를 검증한 결과는 정상 처리되어야 한다.",
    (numbers, bonusNumber) => {
      // when
      const lotto = new Lotto(numbers);
      // then
      expect(() => {
        lotto.validateBonusNumber(bonusNumber);
      }).not.toThrow("[ERROR]");
    },
  );
});

describe("Lotto.validateBonusNumber - 예외", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 0, "원소의 범위"],
    [[1, 2, 3, 4, 5, 6], 46, "원소의 범위"],
    [[1, 2, 3, 4, 5, 6], 1, "중복"],
  ])(
    "당첨 번호(%s)가 주어졌을 때, 보너스 번호(%s)를 검증한 결과는 %s의 문제로 에러를 발생시켜야 한다.",
    (numbers, bonusNumber) => {
      // when
      const lotto = new Lotto(numbers);
      // then
      expect(() => lotto.validateBonusNumber(bonusNumber)).toThrow("[ERROR]");
    },
  );
});

describe("Lotto.calcResult", () => {
  test.each([
    [[7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 2, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 2, 3, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[5, 1]]), 500],
    [[1, 2, 3, 4, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[4, 1]]), 5000],
    [[1, 2, 3, 4, 5, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[3, 1]]), 150000],
    [[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7, new Map([[2, 1]]), 3000000],
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7, new Map([[1, 1]]), 200000000],
  ])(
    "티켓 번호(%s), 당첨 번호(%s), 보너스 번호(%s)가 주어졌을 때, 등수 결과는 %s와 같고, 수익률은 %s와 같아야 한다.",
    (ticketItems, numbers, bonusNumber, expectedPrizeMap, expectedWinRate) => {
      // when
      const lotto = new Lotto(numbers);
      lotto.validateBonusNumber(bonusNumber);
      const { prizeMap, winRate } = lotto.calcResult(
        [ticketItems],
        bonusNumber,
      );
      // then
      expect(prizeMap).toEqual(expectedPrizeMap);
      expect(winRate).toEqual(expectedWinRate);
    },
  );

  test("여러 개의 티켓이 주어질 때, 결과를 계산할 수 있어야 한다.", () => {
    // given
    const ticketItems = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 7, 8, 9],
      [2, 34, 35, 43, 44, 45],
    ];
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const expectedPrizeMap = new Map([
      [1, 1],
      [5, 1],
      [6, 1],
    ]);
    const expectedWinRate = 66666833.333333336;
    const expected = { prizeMap: expectedPrizeMap, winRate: expectedWinRate };

    // when
    const lotto = new Lotto(numbers);
    const result = lotto.calcResult(ticketItems, bonus);

    // then
    expect(result).toEqual(expected);
  });
});
