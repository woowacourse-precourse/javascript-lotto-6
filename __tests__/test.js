import { MissionUtils } from '@woowacourse/mission-utils';
import { CashCount } from '../src/CashCount.js';
import { LottoMachine } from '../src/LottoMachine.js';

//CashCount 클래스 테스트
describe('cashcount 클래스 테스트', () => {
  test('1000원 나누어 떨어지나', () => {
    expect(() => {
      new CashCount(123);
    }).toThrow('[ERROR]');
  });
  test('숫자인가', () => {
    expect(() => {
      new CashCount(NaN);
    }).toThrow('[ERROR]');
  });
});

describe('LottoMachine 클래스 테스트', () => {
  test('로또를 구매하고 배열로 반환한다.', () => {
    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.buyLottos(10);

    expect(Array.isArray(lottos)).toBe(true);
  });

  test('구매한 로또 개수가 올바르게 출력된다.', () => {
    const lottoMachine = new LottoMachine();
    const cash = 5000;
    const cashCount = new CashCount(cash).count;

    const consoleMock = jest.spyOn(MissionUtils.Console, 'print');
    lottoMachine.buyLottos(cashCount);

    expect(consoleMock).toHaveBeenCalledWith(`${cashCount}개를 구매했습니다.`);
  });
});
