import { checkLottoResult } from '../../src/utils/CheckLottoResult';

describe('로또 결과 확인', () => {
  test.each([
    [[[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 7, [0, 0, 0, 0, 1]],
    [[[1, 2, 3, 4, 5, 7]], [1, 2, 3, 4, 5, 6], 7, [0, 0, 0, 1, 0]],
    [[[1, 2, 3, 4, 5, 8]], [1, 2, 3, 4, 5, 6], 7, [0, 0, 1, 0, 0]],
    [[[1, 2, 3, 4, 8, 9]], [1, 2, 3, 4, 5, 6], 7, [0, 1, 0, 0, 0]],
    [[[1, 2, 3, 4, 8, 9]], [1, 2, 3, 4, 5, 6], 8, [0, 1, 0, 0, 0]],
    [
      [
        [1, 2, 3, 8, 9, 10],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 5, 8],
      ],
      [1, 2, 3, 4, 5, 6],
      8,
      [1, 0, 1, 1, 0],
    ],
  ])('배열 비교 테스트', (input, winningLottoNumbers, bonusNumber, expected) => {
    expect(checkLottoResult(input, winningLottoNumbers, bonusNumber)).toEqual(expected);
  });
});
