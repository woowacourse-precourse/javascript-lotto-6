import pickUniqueRandomNumbers from '../src/utils/pickUniqueRandomNumbers';

describe('pickUniqueRandomNumbers 테스트 ', () => {
  test('조건에 맞는지 확인(최소값, 최대값, 개수)', () => {
    const MIN = 1;
    const MAX = 45;
    const COUNT = 6;

    const randomNumbers = pickUniqueRandomNumbers(MIN, MAX, COUNT);
    const answer = [...randomNumbers].sort((a, b) => a - b);

    const isEqualOrGreaterThanMin = MIN <= answer[0];
    const isEqualOrLessThanMax = MAX >= answer[COUNT - 1];
    const isCountCorrect = answer.length === COUNT;

    expect(isEqualOrGreaterThanMin).toBeTruthy();
    expect(isEqualOrLessThanMax).toBeTruthy();
    expect(isCountCorrect).toBeTruthy();
  });

  test('중복이 없는지 확인', () => {
    const MIN = 1;
    const MAX = 45;
    const COUNT = 6;

    const randomNumbers = pickUniqueRandomNumbers(MIN, MAX, COUNT);
    const answer = [...new Set([...randomNumbers])];

    const isSameLength = answer.length === randomNumbers.length;

    expect(isSameLength).toBeTruthy();
  });
});
