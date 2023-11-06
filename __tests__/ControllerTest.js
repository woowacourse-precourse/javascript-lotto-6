import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/model/Lotto.js';
import LottoController from '../src/controller/LottoController.js';
import * as Statistics from '../src/utils/Statistics.js';

describe('로또 컨트롤러 진행', () => {
  let controller;
  beforeEach(() => {
    controller = new LottoController();
  });

  test('로또 구매 개수만큼 로또 발행하기(makeNewLottos)', () => {
    controller.countsOfLottos = 3;
    controller.makeNewLottos();

    controller.lottoArray.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  test('로또 수익률 계산(calculateProfit)', () => {
    jest.spyOn(Statistics, 'calculateReward').mockReturnValue(5000);
    controller.usedMoney = 8000;
    controller.calculateProfit();

    expect(Statistics.Place.profit).toBe(62.5);
  });
});
