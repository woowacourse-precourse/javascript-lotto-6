import Calculator from '../src/Calculator/index.js';
import Lotto from '../src/Lotto.js';

const initCalculator = (lottos, winningNumbers, bonusNumber) =>
  new Calculator(lottos, winningNumbers, bonusNumber);

describe('Calculator 클래스 테스트', () => {
  test('당첨 번호와 로또 번호의 일치 개수를 반환하는 #countMatch 메서드를 테스트한다', () => {
    const lottos = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const calculator = initCalculator(lottos, winningNumbers, bonusNumber);

    calculator.countMatch = jest.fn();
    calculator.countMatch.mockImplementation((lotto) => 6);

    lottos.forEach((lotto) => expect(calculator.countMatch(lotto)).toBe(6));
  });

  test('로또, 당첨번호, 보너스번호를 비교하여 로또 순위를 문자열로 반환하는 getRank 메서드를 테스트한다.', () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ];
    const winningNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const bonusNumber = [7, 6];
    const results = ['first', 'second'];

    lottos.forEach((lotto, index) => {
      const calculator = initCalculator(
        lotto,
        winningNumbers[index],
        bonusNumber[index],
      );

      calculator.getRank = jest.fn();
      calculator.getRank.mockImplementation((lotto) => results[index]);

      expect(calculator.getRank(lotto)).toBe(results[index]);
    });
  });

  test('모든 로또의 순위를 파악하여 객체로 반환하는 calculateRanks 메서드를 테스트한다.', () => {
    const numsArray = [
      [1, 2, 3, 4, 5, 6], // first
      [1, 2, 3, 4, 5, 7], // second
      [1, 2, 3, 4, 5, 11], // third
      [1, 2, 3, 4, 9, 10], // fourth
      [1, 2, 3, 7, 23, 25], // fifth
    ];
    const lottos = numsArray.map((nums) => new Lotto(nums));
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const calculator = initCalculator(lottos, winningNumbers, bonusNumber);

    expect(calculator.calculateRanks()).toStrictEqual({
      fifth: 1,
      fourth: 1,
      third: 1,
      second: 1,
      first: 1,
    });
  });
});
