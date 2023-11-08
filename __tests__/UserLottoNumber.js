/* eslint-disable */
import UserLottoNumber from '../src/model/UserLottoNumber.js';
import { MissionUtils } from '@woowacourse/mission-utils';


const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('UserLottoNumber 클래스 테스트', () => {
  test('맞춘 번호에 따라 적절한 rank를 반환하는지 test', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 45],
      [1, 2, 3, 4, 44, 45],
      [1, 2, 3, 43, 44, 45],
    ]);

    const winningLotto = {
      lottoNumber: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    };

    const answer = ['first', 'second', 'third', 'fourth', 'fifth'];

    for (let index = 0; index < answer.length; index++) {
      const userLotto = new UserLottoNumber();
      expect(userLotto.calculateMatchingNumber(winningLotto)).toEqual(
        answer[index]
      );
    }
  });
});
