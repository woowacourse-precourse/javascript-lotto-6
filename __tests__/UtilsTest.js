import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getInputPurchasingMoney,
  getInputWinningNumbers,
  getInputBonusNumber,
} from '../src/util/Utils';
import Lotto from '../src/Lotto';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('입력 테스트', () => {
  const purchasingMoney = ['1010', '1000j', 'asdf', '999', '$123', '1000'];
  const winningNumbers = [
    '1,2,3,4,5,5',
    'a,2,3,4,5',
    '333,1,2,3,4,5',
    '1,2,3,4,5,6',
  ];
  const bonusNumber = ['99', 'aa', '$%', '0', '7'];

  test('로또 구매 금액이 잘못된 입력 값이면 재질문 후 입력 받아야 함.', async () => {
    mockQuestions(purchasingMoney);

    await getInputPurchasingMoney();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(6);
  });

  test('당첨 번호가 잘못된 입력 값이면 재질문 후 입력 받아야 함.', async () => {
    mockQuestions(winningNumbers);

    await getInputWinningNumbers();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(4);
  });

  test('보너스 번호가 잘못된 입력 값이면 재질문 후 입력 받아야 함.', async () => {
    mockQuestions(bonusNumber);

    await getInputBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(5);
  });
});
