import Validations from '../src/Validations.js';
import LottoGameController from '../src/controllers/LottoGameController.js';

describe('로또 개수 테스트', () => {
  test.each([
    [
      [
        [
          [1, 3, 4, 5, 6, 7],
          [2, 5, 6, 7, 8, 9],
        ],
        [4, 5, 6, 3, 7, 1],
        12,
      ],
    ],
    [
      [
        [
          [1, 10, 15, 20, 25, 35],
          [11, 12, 13, 14, 15, 16],
        ],
        [15, 20, 25, 10, 35, 1],
        12,
      ],
    ],
  ])('6개 일치 여부가 맞는지', inputs => {
    const matchCounts = LottoGameController.matchRank(
      inputs[0],
      inputs[1],
      inputs[2],
    );
    expect(matchCounts.findIndex(e => e !== 0)).toEqual(0);
  });

  test.each([
    [
      [
        [
          [1, 2, 3, 4, 5, 6],
          [33, 34, 35, 36, 37, 38],
        ],
        [4, 5, 6, 3, 2, 11],
        1,
      ],
    ],
    [
      [
        [
          [1, 5, 10, 15, 20, 25],
          [3, 4, 7, 8, 9, 11],
        ],
        [5, 10, 1, 15, 20, 28],
        25,
      ],
    ],
  ])('5개 일치 + 보너스 번호 일치 여부가 맞는지', inputs => {
    const matchCounts = LottoGameController.matchRank(
      inputs[0],
      inputs[1],
      inputs[2],
    );
    expect(matchCounts.findIndex(e => e !== 0)).toEqual(1);
  });

  test.each([
    [
      [
        [
          [1, 3, 4, 5, 6, 7],
          [2, 5, 6, 7, 8, 9],
        ],
        [4, 5, 6, 3, 7, 11],
        12,
      ],
    ],
    [
      [
        [
          [1, 10, 15, 20, 25, 35],
          [11, 12, 13, 14, 15, 16],
        ],
        [15, 20, 25, 10, 35, 28],
        12,
      ],
    ],
  ])('5개 일치 여부가 맞는지', inputs => {
    const matchCounts = LottoGameController.matchRank(
      inputs[0],
      inputs[1],
      inputs[2],
    );
    expect(matchCounts.findIndex(e => e !== 0)).toEqual(2);
  });

  test.each([
    [
      [
        [
          [1, 2, 3, 4, 5, 6],
          [33, 34, 35, 36, 37, 38],
        ],
        [4, 5, 6, 3, 10, 11],
        12,
      ],
    ],
    [
      [
        [
          [1, 5, 10, 15, 20, 25],
          [11, 16, 22, 27, 28, 42],
        ],
        [15, 20, 25, 10, 27, 28],
        12,
      ],
    ],
  ])('4개 일치 여부가 맞는지', inputs => {
    const matchCounts = LottoGameController.matchRank(
      inputs[0],
      inputs[1],
      inputs[2],
    );
    expect(matchCounts.findIndex(e => e !== 0)).toEqual(3);
  });

  test.each([
    [
      [
        [
          [1, 2, 3, 4, 5, 6],
          [23, 24, 25, 26, 27, 28],
        ],
        [4, 5, 6, 9, 10, 11],
        12,
      ],
    ],
    [
      [
        [
          [1, 5, 10, 15, 20, 25],
          [16, 21, 35, 40, 41, 42],
        ],
        [15, 20, 25, 26, 27, 28],
        12,
      ],
    ],
  ])('3개 일치 여부가 맞는지', inputs => {
    const matchCounts = LottoGameController.matchRank(
      inputs[0],
      inputs[1],
      inputs[2],
    );
    expect(matchCounts.findIndex(e => e !== 0)).toEqual(4);
  });
});
