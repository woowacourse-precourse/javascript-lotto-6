import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../src/controller/LottoGame.js';

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('로또 구매', () => {
  test('갖고 있는 돈', async () => {
    mockQuestion('3000');

    const lottoGame = new LottoGame();
    await lottoGame.buyLotto();

    expect(lottoGame.getMoney()).toEqual(3000);
  });
});
