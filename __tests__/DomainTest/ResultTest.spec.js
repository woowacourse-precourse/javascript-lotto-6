import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../../src/controller/LottoGame.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('결과 생성', () => {
  test('당첨 통계 계산', async () => {
    mockQuestions(['5000', '1,2,3,4,5,6', '7']);

    mockRandoms([
      [1, 2, 3, 4, 5, 43], // 5개 일치
      [1, 2, 3, 4, 42, 43], // 4개 일치
      [1, 2, 3, 4, 5, 7], // 5개+보너스번호 일치
      [4, 5, 6, 35, 36, 44], // 3개 일치
      [1, 2, 3, 4, 5, 6], // 6개 일치
    ]);

    const lottoGame = new LottoGame();

    await lottoGame.buyLotto();
    await lottoGame.drawLotto();
    await lottoGame.result();

    const rewardCount = lottoGame.getRewardCount();
    expect(rewardCount).toEqual({ 3: 1, 4: 1, 5: 1, 6: 1, '5b': 1 });
  });
  test('총 수익률 계산', async () => {
    const money = 18000;
    const lottoGame = new LottoGame();
    const rewardCount = lottoGame.getRewardCount();

    rewardCount[3] = 10;
    rewardCount[4] = 5;
    rewardCount[5] = 2;
    rewardCount['5b'] = 1;
    rewardCount[6] = 0;

    lottoGame.result();
    const myWinningMoney = lottoGame.getMyWinningMoney();

    const myBenefit = (myWinningMoney / money) * 100;

    expect(myBenefit).toEqual(185000);
  });
});
