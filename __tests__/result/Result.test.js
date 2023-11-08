import Result from '../../src/result/Result.js';

describe('result : result 생성 유효성 테스트', () => {
  test('오류를 반환하지 않아야 한다.', () => {
    expect(() => new Result()).not.toThrow();
  });
});

describe('result : 등수 산정 및 수익률 계산 테스트', () => {
  const result = new Result();

  test('로또와 당첨번호에 맞게 올바른 등수를 반환해야 한다.', () => {
    result.setResult(
      [
        [1, 2, 3, 4, 5, 6], // 1등
        [1, 2, 3, 4, 5, 7], // 2등
        [1, 3, 5, 7, 9, 11], // 5등
        [1, 2, 3, 11, 12, 13], // 5등
        [4, 5, 6, 7, 8, 9], // 5등
        [2, 3, 4, 5, 6, 7], // 2등
        [2, 3, 4, 5, 7, 45], // 4등
        [2, 3, 4, 5, 6, 45], // 3등
        [40, 41, 42, 43, 44, 45], // 등수 x
      ],
      { numbers: [1, 2, 3, 4, 5, 6], bonus: 7 },
    );

    result.calculateRanks();
    expect(result.prizes()).toEqual({
      1: 1,
      2: 2,
      3: 1,
      4: 1,
      5: 3,
    });
  });

  test('당첨 등수에 맞게 올바른 수익률을 반환해야 한다.', () => {
    result.calculateReturns();
    expect(result.returnRate()).toEqual('22906277.8');
  });
});
