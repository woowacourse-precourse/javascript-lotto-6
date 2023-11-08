import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../../src/controller/LottoGame.js';
import Lotto from '../../src/model/Lotto.js';

const mockQuestion = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};
describe('로또 구매', () => {
  test('갖고 있는 돈', async () => {
    mockQuestion('3000');

    const lottoGame = new LottoGame();
    await lottoGame.buyLotto();

    expect(lottoGame.getMoney()).toEqual(3000);
  });

  test('갖고 있는 로또 리스트', async () => {
    mockQuestion('3000');
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    const lottoGame = new LottoGame();
    await lottoGame.buyLotto();

    const lottolist = lottoGame.getMyLottos().getMyLottoList();
    expect(lottolist.length).toBe(3);
    expect(lottolist).toEqual([
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
    ]);
  });
});
