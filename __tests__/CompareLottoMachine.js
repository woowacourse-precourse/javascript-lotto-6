import CompareLottoMachine from '../src/CompareLottoMachine.js';

describe('사용자 번호와 당첨 결과 비교 테스트', () => {
  test('5,000원 3개 당첨시 결과 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '7';
    const userNumbers = [
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 20, 21, 22],
      [1, 2, 3, 30, 31, 32],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 3,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
    });
  });

  test('50,000원 2개 당첨시 결과 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '7';
    const userNumbers = [
      [1, 2, 3, 4, 11, 12],
      [1, 2, 3, 4, 21, 22],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 0,
      50000: 2,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
    });
  });

  test('1,500,000원 4개 당첨시 결과 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '7';
    const userNumbers = [
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 5, 22],
      [1, 2, 3, 4, 5, 32],
      [1, 2, 3, 4, 5, 42],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 0,
      50000: 0,
      1500000: 4,
      30000000: 0,
      2000000000: 0,
    });
  });

  test('30,000,000원 2개 당첨시 결과 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '12';
    const userNumbers = [
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 5, 12],
      [20, 21, 22, 23, 24, 25],
      [30, 31, 32, 33, 34, 35],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 2,
      2000000000: 0,
    });
  });

  test('2,000,000,000원 1개 당첨시 결과 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '12';
    const userNumbers = [
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 25],
      [30, 31, 32, 33, 34, 35],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 1,
    });
  });

  test('5,000원 1개, 50,000원 2개, 1,500,000 3개 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '12';
    const userNumbers = [
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 4, 10, 11],
      [1, 2, 3, 4, 20, 20],
      [1, 2, 3, 4, 5, 13],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 1,
      50000: 2,
      1500000: 1,
      30000000: 0,
      2000000000: 0,
    });
  });

  test('1,500,000 3개, 30,000,000원 2개, 2,000,000,000원 1개 테스트', () => {
    const winnigNumbers = '1,2,3,4,5,6';
    const bonusNumbers = '12';
    const userNumbers = [
      [1, 2, 3, 4, 5, 15],
      [1, 2, 3, 4, 5, 20],
      [1, 2, 3, 4, 5, 30],
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 6, 12],
      [1, 2, 3, 4, 5, 6],
    ];
    const compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    expect(compareLottoMachine.compareLottoNumbers(userNumbers)).toEqual({
      5000: 0,
      50000: 0,
      1500000: 3,
      30000000: 2,
      2000000000: 1,
    });
  });
});
