import Model from '../src/Model.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('랜덤 숫자 생성 테스트', () => {
  test('입력한 금액만큼 로또를 생성하는지 확인.', () => {
    const model = new Model();
    model.generateRandomLottoNumbers(5000);

    expect(model.getLottoNumbersLength()).toBe(5);
  });

  test('로또 등수 테스트', () => {
    const model = new Model();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10],
      [1, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
      [8, 9, 10, 11, 12, 13],
    ]);

    model.generateRandomLottoNumbers(8000);

    model.setLottoNumbers([1, 2, 3, 4, 5, 6]);
    model.setBonusNumber(7);

    const winningLottos = model.getWinningLottos();

    expect(winningLottos).toEqual([1, 1, 1, 1, 1]);
  });
});
