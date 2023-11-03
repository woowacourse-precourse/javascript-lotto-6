import WinningLotto from "../src/WinningLotto.js";

const createWinningLotto = (numbers, bonusNumber) => {
  return new WinningLotto(numbers, bonusNumber);
};

describe("당첨 로또 클래스 테스트", () => {
  let cases;

  // given
  cases = [
    {
      input: { numbers: [1, 2, 3, 4, 5], bonusNumber: 6 },
      expected: "[ERROR]",
    },
    {
      input: { numbers: [1, 2, 3, 4, 5, 6, 7], bonusNumber: 8 },
      expected: "[ERROR]",
    },
  ];
  test.each(cases)(
    "로또 번호의 개수가 6개가 아니면, 예외가 발생한다.",
    ({ input: { numbers, bonusNumber }, expected }) => {
      // when
      const whenCreateWinningLotto = () => {
        createWinningLotto(numbers, bonusNumber);
      };

      // then
      expect(whenCreateWinningLotto).toThrow(expected);
    },
  );

  // given
  cases = [
    {
      input: { numbers: [1, 2, 3, 4, 5, 5], bonusNumber: 7 },
      expected: "[ERROR]",
    },
    {
      input: { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 6 },
      expected: "[ERROR]",
    },
    {
      input: { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 2 },
      expected: "[ERROR]",
    },
  ];
  test.each(cases)(
    "로또 번호 or 보너스 번호에 중복된 숫자가 있으면, 예외가 발생한다.",
    ({ input: { numbers, bonusNumber }, expected }) => {
      // when
      const whenCreateWinningLotto = () => {
        createWinningLotto(numbers, bonusNumber);
      };

      // then
      expect(whenCreateWinningLotto).toThrow(expected);
    },
  );

  // given
  cases = [
    {
      input: { numbers: [1, 2, 3, 4, 5, 45], bonusNumber: 46 },
      expected: "[ERROR]",
    },
    {
      input: { numbers: [1, 2, 3, 4, 5, 46], bonusNumber: 45 },
      expected: "[ERROR]",
    },
  ];
  test.each(cases)(
    "로또 번호 or 보너스 번호에 1~45 범위가 넘는 숫자가 있으면, 예외가 발생한다.",
    ({ input: { numbers, bonusNumber }, expected }) => {
      // when
      const whenCreateWinningLotto = () => {
        createWinningLotto(numbers, bonusNumber);
      };

      // then
      expect(whenCreateWinningLotto).toThrow(expected);
    },
  );

  test("유효한 번호로 로또를 생성한 경우, getNumbers 메서드는 로또 번호의 사본을 반환한다.", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    // when
    const lotto = createWinningLotto(numbers, bonusNumber);

    // then
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).not.toBe(numbers);
  });

  test("유효한 번호로 로또를 생성한 경우, getBonusNumber 메서드는 보너스 번호를 반환한다.", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    // when
    const lotto = createWinningLotto(numbers, bonusNumber);

    // then
    expect(lotto.getBonusNumber()).toBe(bonusNumber);
  });
});
