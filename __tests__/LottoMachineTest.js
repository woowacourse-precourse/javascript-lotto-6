import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoMachine } from '../src/Domain/LottoMachine.js';

describe('LottoMachine 클래스 테스트', () => {
  test('로또를 구매하고 배열로 반환한다.', () => {
    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.buyLottos(10);

    expect(Array.isArray(lottos)).toBe(true);
  });

  test('구매한 로또 개수가 올바르게 출력된다.', () => {
    const lottoMachine = new LottoMachine();
    const cashCount = 5;

    const consoleMock = jest.spyOn(MissionUtils.Console, 'print');
    lottoMachine.buyLottos(cashCount);

    expect(consoleMock).toHaveBeenCalledWith(`${cashCount}개를 구매했습니다.`);
  });
});
