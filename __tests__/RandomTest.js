import Random from '../src/Random.js';
import randomModel from '../src/models/randomModel.js';

const mockOneOfRandom = (numbers) => {
  randomModel.getOneOfRandom = jest.fn();
  numbers.reduce(
    (acc, random) => acc.mockReturnValueOnce(random),
    randomModel.getOneOfRandom,
  );
};

describe('발행된 로또 클래스 테스트', () => {
  test('구입한 로또 개수 값을 가지고 정렬된 로또 정보를 알아낼 수 있다.', () => {
    // given
    const NUMBER = 3;
    const virtualValue = [
      [6, 3, 4, 2, 1, 5],
      [37, 17, 40, 27, 41, 7],
      [25, 45, 21, 44, 19, 32],
    ];
    const random = [
      [1, 2, 3, 4, 5, 6],
      [7, 17, 27, 37, 40, 41],
      [19, 21, 25, 32, 44, 45],
    ];
    const randomString = [
      '[1, 2, 3, 4, 5, 6]\n',
      '[7, 17, 27, 37, 40, 41]\n',
      '[19, 21, 25, 32, 44, 45]\n',
    ];
    const output = { random, randomString };

    mockOneOfRandom([...virtualValue]);

    // when
    const randomObject = new Random(NUMBER);
    const randomAnfRandomString = randomObject.getRandomAndRandomString();

    // then
    expect(randomAnfRandomString).toEqual(output);
  });
});
