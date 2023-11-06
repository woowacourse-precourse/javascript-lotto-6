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
  test('generateAndStoreLotto() - 생성된 로또가 배열에 순차적으로 저장되어야 한다.', () => {
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
});
