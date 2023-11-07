import randomModel from '../../src/models/randomModel.js';

const mockOneOfRandom = (numbers) => {
  randomModel.getOneOfRandom = jest.fn();
  numbers.reduce(
    (acc, random) => acc.mockReturnValueOnce(random),
    randomModel.getOneOfRandom,
  );
};

describe('오름차순 정렬', () => {
  test('오름차순으로 정렬된다.', () => {
    // given
    const input = [100, 123, 77, 47, 96, 55, 45, 1, 3, 0];
    const output = [0, 1, 3, 45, 47, 55, 77, 96, 100, 123];

    // when
    const result = randomModel.sortRandom(input);

    // then
    expect(result).toEqual(output);
  });

  test('오름차순으로 제대로 정렬이 되는가', () => {
    // given
    const input = [5, 1, 3, 2, 4];
    const output = {
      notEqual: [1, 2, 3, 5, 4],
      equal: [1, 2, 3, 4, 5],
    };

    // when
    const result = randomModel.sortRandom(input);

    // then
    expect(result).not.toEqual(output.notEqual);
    expect(result).toEqual(output.equal);
  });
});

describe('로또 발행 기능', () => {
  test('오름차순으로 정렬된 배열이 n개 담겨 있는 이차원 배열이 반환된다.', () => {
    // given
    const INPUT_NUMBER = 3;
    const random = [
      [5, 4, 1, 3, 2, 7],
      [7, 6, 9, 8, 10, 13],
      [45, 37, 12, 25, 19, 8],
    ];
    const output = [
      [1, 2, 3, 4, 5, 7],
      [6, 7, 8, 9, 10, 13],
      [8, 12, 19, 25, 37, 45],
    ];

    mockOneOfRandom([...random]);

    // when
    const result = randomModel.getRandom(INPUT_NUMBER);

    // then
    expect(result).toEqual(output);
  });
});

describe('발행된 로또 정보를 문자열로 보여주기', () => {
  test('배열의 원소가 문자열로 변환된다.', () => {
    // given
    const input = [
      [1, 2, 3, 4, 5, 7],
      [6, 7, 8, 9, 10, 13],
      [11, 14, 22, 30, 33, 34],
    ];
    const output = [
      `[1, 2, 3, 4, 5, 7]\n`,
      `[6, 7, 8, 9, 10, 13]\n`,
      `[11, 14, 22, 30, 33, 34]\n`,
    ];

    // when
    const result = randomModel.getStringOfRandom(input);

    // then
    expect(result).toEqual(output);
  });
});
