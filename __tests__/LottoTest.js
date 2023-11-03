import Lotto from "../src/Lotto.js";

const createLotto = (numbers) => {
  return new Lotto(numbers);
};

describe("로또 클래스 테스트", () => {
  let cases;

  // given
  cases = [
    { input: [1, 2, 3, 4, 5], expected: "[ERROR]" },
    { input: [1, 2, 3, 4, 5, 6, 7], expected: "[ERROR]" },
  ];
  test.each(cases)(
    "로또 번호의 개수가 6개가 아니면, 예외가 발생한다.",
    ({ input, expected }) => {
      // when
      const whenCreateLotto = () => {
        createLotto(input);
      };

      // then
      expect(whenCreateLotto).toThrow(expected);
    },
  );

  // given
  cases = [
    { input: [1, 2, 3, 4, 5, 5], expected: "[ERROR]" },
    { input: [1, 2, 3, 4, 5, 2], expected: "[ERROR]" },
  ];
  test.each(cases)(
    "로또 번호에 중복된 숫자가 있으면, 예외가 발생한다.",
    ({ input, expected }) => {
      // when
      const whenCreateLotto = () => {
        createLotto(input);
      };

      // then
      expect(whenCreateLotto).toThrow(expected);
    },
  );

  // given
  cases = [
    { input: [1, 2, 3, 4, 5, 46], expected: "[ERROR]" },
    { input: [0, 1, 2, 3, 4, 5], expected: "[ERROR]" },
  ];
  test.each(cases)(
    "로또 번호에 1~45 범위가 넘는 숫자가 있으면, 예외가 발생한다.",
    ({ input, expected }) => {
      // when
      const whenCreateLotto = () => {
        createLotto(input);
      };

      // then
      expect(whenCreateLotto).toThrow(expected);
    },
  );

  test("유효한 번호로 로또를 생성한 경우, getNumbers 메서드는 로또 번호의 사본을 반환한다.", () => {
    // given
    const input = [1, 2, 3, 4, 5, 6];

    // when
    const lotto = createLotto(input);

    // then
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).not.toBe(input);
  });
});
