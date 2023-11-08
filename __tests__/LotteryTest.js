/// 도메인은 리펙토링으로 각각 쪼개놓고 해야 되네.
import { MissionUtils } from '@woowacourse/mission-utils';
import Lottery from '../src/domain/Lottery.js';
// import Lotto from '../src/Domain/Lotto.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
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

describe('Lottery 핵심 로직 테스트', () => {
  test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const lotteryGame = new Lottery();
    // await lotteryGame.readPayMoney();
    const payMoney = 5000;
    const lottoNumber = 5;
    lotteryGame.pay(payMoney);

    expect(lotteryGame.lottoList.length).toBe(lottoNumber);
  });

  test('당첨 번호와 일치하는 번호 개수를 확인한다.', () => {
    const lotteryGame = new Lottery();
    lotteryGame.winningNumberList = [1, 2, 3, 4, 5, 6];

    const lottoNumberList = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 8],
      [3, 4, 5, 6, 8, 9],
      [4, 5, 6, 8, 9, 10],
    ];
    const outputWinningCount = [1, 1, 1, 0, 1];
    mockRandoms(lottoNumberList);

    lotteryGame.pay(lottoNumberList.length * 1000);
    lotteryGame.matchNumbers();
    expect(`${lotteryGame.winningCount}`).toBe(`${outputWinningCount}`);
  });
  test('당첨 번호와 5개 일치하는 할 때 보너스 번호 사용한다.', () => {
    const lotteryGame = new Lottery();
    lotteryGame.winningNumberList = [1, 2, 3, 4, 5, 6];
    lotteryGame.bonusNumber = 7;
    const lottoNumberList = [[2, 3, 4, 5, 6, 7]];
    const outputWinningCount = [0, 0, 0, 1, 0];
    mockRandoms(lottoNumberList);

    lotteryGame.pay(lottoNumberList.length * 1000);
    lotteryGame.matchNumbers();
    expect(`${lotteryGame.winningCount}`).toBe(`${outputWinningCount}`);
  });
});
