import Lotto from '../src/Lotto.js';

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

  test('로또 번호가 1 ~ 45를 넘어가면 예외가 발생한다', () => {
    const EXCEPTIONS = [[1, 2, 3, 4, 5, 100], [0, 1, 2, 3, 4, 5], [-2, 23, 12, 9, 17, 30]];
    EXCEPTIONS.forEach((EXCEPTION) => {
      expect(() => {
        new Lotto(EXCEPTION);
      }).toThrow('[ERROR]');
    })
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다', () => {
    const EXCEPTIONS = [[1, 2, 3, 4, 5, 6.5], [10, 11, 12, 13, 14, 15 / 2]];
    EXCEPTIONS.forEach((EXCEPTION) => {
      expect(() => {
        new Lotto(EXCEPTION);
      }).toThrow('[ERROR]');
    });
  });

  test('compareNumbers 기능 테스트', () => {
    const NUMBERS_AND_RESULTS = [
      [[1, 2, 3, 4, 5, 6], 6],
      [[1, 2, 3, 4, 5, 7], 5],
      [[1, 2, 3, 4, 7, 8], 4],
      [[1, 2, 3, 7, 8, 9], 3],
      [[1, 2, 7, 8, 9, 10], 2],
      [[1, 7, 8, 9, 10, 11], 1],
      [[7, 8, 9, 10, 11, 12], 0]
    ];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    NUMBERS_AND_RESULTS.forEach((NUMBER) => {
      const result = lotto.compareNumbers(NUMBER[0]);
      expect(result).toEqual(NUMBER[1]);
    });
  });
});
