import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  describe('로또 번호 입력', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호를 넣으면 번호가 오름차순으로 정렬된다.', () => {
      const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('로또 일치하는 숫자', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    let cases = [
      { input: [7, 8, 9, 10, 11, 12], expected: 0 },
      { input: [1, 8, 9, 10, 11, 12], expected: 1 },
      { input: [1, 2, 9, 10, 11, 12], expected: 2 },
      { input: [1, 2, 3, 10, 11, 12], expected: 3 },
      { input: [1, 2, 3, 4, 11, 12], expected: 4 },
      { input: [1, 2, 3, 4, 5, 12], expected: 5 },
      { input: [1, 2, 3, 4, 5, 6], expected: 6 },
    ];

    test.each(cases)(
      '로또 당첨 번호가 $winningNumbers이고 로또가 $input이면, 일치하는 개수는 $expected이다.',
      ({ input, expected }) => {
        const lotto = new Lotto(input);
        expect(lotto.getWinningNumbersMatchCount(winningNumbers)).toBe(expected);
      },
    );

    const bonusNumber = 10;

    cases = [
      [[7, 8, 9, 10, 11, 12]],
      [[1, 8, 9, 10, 11, 12]],
      [[1, 2, 9, 10, 11, 12]],
      [[1, 2, 3, 10, 11, 12]],
    ];

    test.each(cases)(
      '로또 보너스 번호가 $cases이고 로또 번호가 $bonusNumber이면, true를 반환한다.',
      (input) => {
        const lotto = new Lotto(input);
        expect(lotto.hasBonusNumber(bonusNumber)).toBeTruthy();
      },
    );

    cases = [[[1, 2, 3, 4, 11, 12]], [[1, 2, 3, 4, 5, 12]], [[1, 2, 3, 4, 5, 6]]];

    test.each(cases)(
      '로또 보너스 번호가 $cases이고 로또 번호가 $bonusNumber이면, false를 반환한다.',
      (input) => {
        const lotto = new Lotto(input);
        expect(lotto.hasBonusNumber(bonusNumber)).toBeFalsy();
      },
    );
  });

  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  const mockGetkWinningNumbersMatchCount = (number) => {
    lotto.getWinningNumbersMatchCount = jest.fn();
    lotto.getWinningNumbersMatchCount.mockReturnValueOnce(number);
  };

  const mockHasBonusNumber = (number) => {
    lotto.hasBonusNumber = jest.fn();
    lotto.hasBonusNumber.mockReturnValueOnce(number);
  };

  describe('로또 등수 반환', () => {
    let cases = [
      { matchCnt: 0, hasBonus: false, place: 0 },
      { matchCnt: 1, hasBonus: false, place: 0 },
      { matchCnt: 2, hasBonus: false, place: 0 },
      { matchCnt: 3, hasBonus: false, place: 5 },
      { matchCnt: 4, hasBonus: false, place: 4 },
      { matchCnt: 5, hasBonus: false, place: 3 },
      { matchCnt: 6, hasBonus: false, place: 1 },
      { matchCnt: 0, hasBonus: true, place: 0 },
      { matchCnt: 1, hasBonus: true, place: 0 },
      { matchCnt: 2, hasBonus: true, place: 0 },
      { matchCnt: 3, hasBonus: true, place: 5 },
      { matchCnt: 4, hasBonus: true, place: 4 },
      { matchCnt: 5, hasBonus: true, place: 2 },
    ];

    test.each(cases)(
      '로또 번호가 $matchCnt개 일치하고 보너스번호 유무가 $hasBonus이면, 등수는 $place이다.',
      (input) => {
        mockGetkWinningNumbersMatchCount(input.matchCnt);
        mockHasBonusNumber(input.hasBonus);

        expect(lotto.getWinningPlace([1, 2, 3, 4, 5, 6], 7)).toBe(input.place);
      },
    );
  });
});
