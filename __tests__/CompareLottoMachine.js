import CompareLottoMachine from '../src/CompareLottoMachine.js';

describe('compareLottoMachine.compareLottoNumbers 테스트', () => {
  const winnigNumbers = '1,2,3,4,5,6';
  let bonusNumbers = '7';
  let compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

  test('5,000원 3개 당첨시 결과 테스트', () => {
    // given
    const userNumbers = [
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 20, 21, 22],
      [1, 2, 3, 30, 31, 32],
    ];

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 3, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 0, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
    ]);
  });

  test('50,000원 2개 당첨시 결과 테스트', () => {
    // given
    const userNumbers = [
      [1, 2, 3, 4, 11, 12],
      [1, 2, 3, 4, 21, 22],
    ];

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 0, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 2, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
    ]);
  });

  test('1,500,000원 4개 당첨시 결과 테스트', () => {
    // given
    const userNumbers = [
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 5, 22],
      [1, 2, 3, 4, 5, 32],
      [1, 2, 3, 4, 5, 42],
    ];

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 0, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 0, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 4, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
    ]);
  });

  test('30,000,000원 2개 당첨시 결과 테스트', () => {
    // given
    const userNumbers = [
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 5, 12],
      [20, 21, 22, 23, 24, 25],
      [30, 31, 32, 33, 34, 35],
    ];
    bonusNumbers = '12';
    compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 0, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 0, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 2, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
    ]);
  });

  test('2,000,000,000원 1개 당첨시 결과 테스트', () => {
    const userNumbers = [
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 25],
      [30, 31, 32, 33, 34, 35],
    ];
    bonusNumbers = '12';
    compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 0, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 0, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 1, prize: 2000000000 },
    ]);
  });

  test('5,000원 1개, 50,000원 2개, 1,500,000 1개 테스트', () => {
    const userNumbers = [
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 4, 10, 11],
      [1, 2, 3, 4, 20, 20],
      [1, 2, 3, 4, 5, 13],
    ];
    bonusNumbers = '12';
    compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 1, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 2, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 1, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 0, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 0, prize: 2000000000 },
    ]);
  });

  test('1,500,000 3개, 30,000,000원 2개, 2,000,000,000원 1개 테스트', () => {
    const userNumbers = [
      [1, 2, 3, 4, 5, 15],
      [1, 2, 3, 4, 5, 20],
      [1, 2, 3, 4, 5, 30],
      [1, 2, 3, 4, 5, 12],
      [1, 2, 3, 4, 6, 12],
      [1, 2, 3, 4, 5, 6],
    ];
    bonusNumbers = '12';
    compareLottoMachine = new CompareLottoMachine(winnigNumbers, bonusNumbers);

    // when
    const result = compareLottoMachine.compareLottoNumbers(userNumbers);

    // then
    expect(result).toEqual([
      { matchCriteria: 3, matchedNumber: 0, prize: 5000 },
      { matchCriteria: 4, matchedNumber: 0, prize: 50000 },
      { matchCriteria: 5, matchedNumber: 3, prize: 1500000 },
      { matchCriteria: 5, matchedNumber: 2, prize: 30000000 },
      { matchCriteria: 6, matchedNumber: 1, prize: 2000000000 },
    ]);
  });
});
