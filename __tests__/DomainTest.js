/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import LottoController from '../controller/LottoController';
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
// X getPrice
// printLotto
// getWinNum
// getBonusNum

// generateAndStoreLotto
// checkWin
// getWinCountArr
// printWinCount
// calculateReturnRate
// printReturnRate
describe('핵심 로직 테스트', () => {
  test('generateAndStoreLotto() - 생성된 로또가 배열에 순차적으로 저장한다.', () => {
    // given
    const arr = [];

    // when
    const controller = new LottoController();
    controller.generateAndStoreLotto(arr);

    // then
    expect(arr).toEqual([{}]);

    // when
    controller.generateAndStoreLotto(arr);

    // then
    expect(arr).toEqual([{}, {}]);
  });

  test('checkIsBonus() - 당첨 번호에 보너스 번호와 일치하는 번호가 있으면 배열에 `7`을 저장하거나 없으면 `5`를 저장한다.', () => {
    // given
    const arr = [
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 9],
    ];
    const bonus = 7;

    // when
    const controller = new LottoController();
    for (let i = 0; i < arr.length; i++) {
      controller.checkIsBonus(arr[i], bonus);
    }

    // then
    expect(controller.sameNumCountArr).toEqual([5, 7, 5]);
  });

  test('checkWin() - 당첨 번호와 로또 번호 비교 후 일치하는 번호의 갯수를 배열에 저장한다.', () => {
    // given
    const arr = [];
    const price = 7000;
    const win = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    mockRandoms([
      [1, 7, 8, 9, 10, 11], // 1개 일치
      [1, 2, 7, 8, 9, 10], // 2개 일치
      [1, 2, 3, 7, 8, 9], // 3개 일치
      [1, 2, 3, 4, 7, 8], // 4개 일치
      [1, 2, 3, 4, 5, 8], // 5개 일치
      [1, 2, 3, 4, 5, 7], // 5개 + 보너스 일치
      [1, 2, 3, 4, 5, 6], // 6개 일치
    ]);

    // when
    const controller = new LottoController();
    for (let i = 0; i < price / 1000; i++) {
      controller.generateAndStoreLotto(arr);
    }
    controller.checkWin(price, win, bonus, arr);

    // then
    expect(controller.sameNumCountArr).toEqual([1, 2, 3, 4, 5, 7, 6]);
  });

  test('getWinCountArr() - n개가 일치하는 로또가 몇 개 있는지 배열에 저장한다.(n = 3, 4, 5, 6, 7(5+보너스))', () => {
    // given
    const arr = [];

    // when
    const controller = new LottoController();
    controller.sameNumCountArr = [1, 3, 2, 5, 7, 6, 5, 7];
    controller.getWinCountArr(arr);

    // then
    expect(arr).toEqual([1, 0, 2, 2, 1]);
  });
});
