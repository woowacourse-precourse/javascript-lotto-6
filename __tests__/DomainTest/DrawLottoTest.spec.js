import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../../src/controller/LottoGame.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('당첨 번호, 보너스 번호 뽑기', () => {
  test('입력한 번호 확인', async () => {
    mockQuestions(['1,2,3,4,5,6', '7']);
    const lottoGame = new LottoGame();

    await lottoGame.drawLotto();

    // 당첨 번호
    const winningNumber = lottoGame.getWinningLotto().getWinningNumber();
    // 보너스 번호
    const bonusNumber = lottoGame.getWinningLotto().getBonusNumber();

    expect(winningNumber).toEqual([1, 2, 3, 4, 5, 6]);
    expect(bonusNumber).toEqual(7);
  });
});
